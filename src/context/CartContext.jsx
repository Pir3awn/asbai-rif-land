import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../utils/formatters'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('cart')
    return savedItems ? JSON.parse(savedItems) : []
  })
  const [isOpen, setIsOpen] = useState(false)
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addToCart = (product) => {
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

    // Show notification
    setNotification({
      message: `Added ${product.quantity || 1}x ${product.title} to cart`,
      type: 'success'
    })
    setTimeout(() => setNotification(null), 3000)
  }

  const removeFromCart = (productId) => {
    setItems(currentItems => currentItems.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return
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