import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../utils/formatters'

const CartContext = createContext()
const STORAGE_KEY = 'cart'
const DB_NAME = 'CartDB'
const STORE_NAME = 'cart'

// IndexedDB setup
const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1)

    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)

    request.onupgradeneeded = (event) => {
      const db = event.target.result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME)
      }
    }
  })
}

const saveToIndexedDB = async (items) => {
  try {
    const db = await initDB()
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite')
      const store = transaction.objectStore(STORE_NAME)
      const request = store.put(items, STORAGE_KEY)

      request.onsuccess = () => resolve(true)
      request.onerror = () => reject(request.error)
    })
  } catch (error) {
    console.error('Error saving to IndexedDB:', error)
    return false
  }
}

const loadFromIndexedDB = async () => {
  try {
    const db = await initDB()
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly')
      const store = transaction.objectStore(STORE_NAME)
      const request = store.get(STORAGE_KEY)

      request.onsuccess = () => resolve(request.result || [])
      request.onerror = () => reject(request.error)
    })
  } catch (error) {
    console.error('Error loading from IndexedDB:', error)
    return []
  }
}

const saveToStorage = async (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    return true
  } catch (error) {
    if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
      console.warn('Storage quota exceeded, falling back to IndexedDB')
      return saveToIndexedDB(items)
    }
    console.error('Error saving cart to storage:', error)
    return saveToIndexedDB(items)
  }
}

const loadFromStorage = async () => {
  try {
    const savedItems = localStorage.getItem(STORAGE_KEY)
    return savedItems ? JSON.parse(savedItems) : []
  } catch (error) {
    console.warn('Error loading from localStorage, trying IndexedDB:', error)
    return loadFromIndexedDB()
  }
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [notification, setNotification] = useState(null)
  const [storageError, setStorageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Initial load
  useEffect(() => {
    loadFromStorage()
      .then(savedItems => {
        setItems(savedItems)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
        setStorageError(true)
      })
  }, [])

  // Save changes
  useEffect(() => {
    if (!isLoading) {
      saveToStorage(items)
        .then(success => setStorageError(!success))
        .catch(() => setStorageError(true))
    }
  }, [items, isLoading])

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  const addToCart = (product) => {
    if (storageError) {
      showNotification('Unable to add item. Storage error occurred.', 'error')
      return
    }

    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id)
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        )
      }
      
      return [...currentItems, { ...product, quantity: product.quantity || 1 }]
    })

    showNotification(`Added ${product.quantity || 1}x ${product.title} to cart`)
  }

  const removeFromCart = (productId) => {
    setItems(currentItems => currentItems.filter(item => item.id !== productId))
    showNotification('Item removed from cart')
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return
    
    if (storageError) {
      showNotification('Unable to update quantity. Storage error occurred.', 'error')
      return
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
    showNotification('Cart cleared')
  }

  const getTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const itemCount = items.reduce((count, item) => count + item.quantity, 0)

  const value = {
    items,
    isOpen,
    notification,
    itemCount,
    storageError,
    isLoading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    setIsOpen,
    formattedTotal: formatPrice(getTotal())
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CartProvider 