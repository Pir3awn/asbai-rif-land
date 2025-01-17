import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BookingProvider } from './context/BookingContext'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <BookingProvider>
          <App />
        </BookingProvider>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
)
