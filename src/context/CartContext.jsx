import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState([])

  const addToCart = (item) => {
    setItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id && i.type === item.type)
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id && i.type === item.type
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId, type) => {
    setItems((prev) => prev.filter((i) => !(i.id === itemId && i.type === type)))
  }

  const updateQuantity = (itemId, type, quantity) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId && item.type === type
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getCartCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const value = {
    isOpen,
    setIsOpen,
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartCount,
    getCartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
} 