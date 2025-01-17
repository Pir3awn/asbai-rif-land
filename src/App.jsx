import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Apartments from './components/sections/Apartments'
import Camping from './components/sections/Camping'
import Cafe from './components/sections/Cafe'
import Products from './components/sections/Products'
import Parcels from './components/sections/Parcels'
import Contact from './components/sections/Contact'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <Cart />
          <main>
            <Hero />
            <Apartments />
            <Camping />
            <Cafe />
            <Products />
            <Parcels />
            <Contact />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
