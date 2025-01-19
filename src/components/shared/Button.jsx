import PropTypes from 'prop-types'

const variants = {
  primary: 'bg-black text-white hover:bg-lime-600',
  secondary: 'bg-white text-black border border-black hover:bg-gray-100',
  outline: 'bg-transparent text-black border border-black hover:bg-black hover:text-white',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2',
  lg: 'px-8 py-3 text-lg',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-lg
        font-medium
        transform
        hover:scale-[1.02]
        transition-all
        duration-300
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button 
