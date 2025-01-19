import PropTypes from 'prop-types'

const Section = ({
  id,
  title,
  description,
  children,
  className = '',
  background = 'bg-white',
}) => {
  return (
    <section id={id} className={`py-20 ${background} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl font-bold text-black mb-4">{title}</h2>
            )}
            {description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  background: PropTypes.string,
}

export default Section 