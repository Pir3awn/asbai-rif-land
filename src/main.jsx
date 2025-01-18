import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './i18n'
import { BookingProvider } from './context/BookingContext'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <CartProvider>
          <BookingProvider>
            <App />
          </BookingProvider>
        </CartProvider>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
)
