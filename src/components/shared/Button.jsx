import PropTypes from 'prop-types'

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-lime-500 hover:bg-lime-600 text-white shadow-sm hover:shadow focus:ring-lime-500',
    secondary: 'bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 border border-gray-300 shadow-sm hover:shadow focus:ring-lime-500'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  disabled: PropTypes.bool
}

export default Button 
