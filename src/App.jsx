import { Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { ErrorBoundary } from './components/shared'
import AppProviders from './context/AppProviders'
import Loading from './components/shared/Loading'
import PageTransition from './components/shared/PageTransition'
import ScrollToTop from './components/shared/ScrollToTop'
import LoadingBar from './components/shared/LoadingBar'
import PageMetadata from './components/shared/PageMetadata'
import { routes } from './routes'

// Layout component
const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-white relative">
    <Navbar />
    <Cart />
    <main className="flex-grow w-full relative">
      {children}
    </main>
    <div className="relative z-10">
      <Footer />
    </div>
  </div>
)

// Route wrapper component
const RouteWrapper = ({ Component, metadata }) => {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <ErrorBoundary>
      <PageMetadata {...metadata} />
      <LoadingBar isLoading={isLoading} />
      <Suspense
        fallback={<Loading fullScreen={metadata.fullScreen} />}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      >
        <PageTransition>
          {isHome ? (
            <Component />
          ) : (
            <div className="pt-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Component />
              </div>
            </div>
          )}
        </PageTransition>
      </Suspense>
    </ErrorBoundary>
  )
}

// AnimatedRoutes component for handling route transitions
const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, component: Component, metadata }) => (
          <Route
            key={path}
            path={path}
            element={<RouteWrapper Component={Component} metadata={metadata} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <ErrorBoundary>
      <AppProviders>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </BrowserRouter>
      </AppProviders>
    </ErrorBoundary>
  )
}

export default App
