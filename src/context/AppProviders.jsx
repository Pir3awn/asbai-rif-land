import { CartProvider } from './CartContext'
import { ThemeProvider } from './ThemeContext'
import { BookingProvider } from './BookingContext'
import { LanguageProvider } from './LanguageContext'
import PropTypes from 'prop-types'

const AppProviders = ({ children }) => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CartProvider>
          <BookingProvider>
            {children}
          </BookingProvider>
        </CartProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProviders 