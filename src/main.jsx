import './i18n';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'
import { LanguageProvider } from './context/LanguageContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
)
