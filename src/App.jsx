import { Suspense } from 'react'
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
import { ErrorBoundary } from './components/shared'
import { BookingProvider } from './context/BookingContext'
import { LanguageProvider } from './context/LanguageContext'

// Loading component for Suspense fallback
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-600"></div>
  </div>
)

const App = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider>
          <CartProvider>
            <BookingProvider>
              <div className="min-h-screen bg-white dark:bg-gray-900">
                <Navbar />
                <Cart />
                <main>
                  <ErrorBoundary fallback="Failed to load hero section">
                    <Hero />
                  </ErrorBoundary>

                  <Suspense fallback={<Loading />}>
                    <ErrorBoundary fallback="Failed to load apartments section">
                      <Apartments />
                    </ErrorBoundary>

                    <ErrorBoundary fallback="Failed to load camping section">
                      <Camping />
                    </ErrorBoundary>

                    <ErrorBoundary fallback="Failed to load cafe section">
                      <Cafe />
                    </ErrorBoundary>

                    <ErrorBoundary fallback="Failed to load products section">
                      <Products />
                    </ErrorBoundary>

                    <ErrorBoundary fallback="Failed to load parcels section">
                      <Parcels />
                    </ErrorBoundary>

                    <ErrorBoundary fallback="Failed to load contact section">
                      <Contact />
                    </ErrorBoundary>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </BookingProvider>
          </CartProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  )
}

export default App
