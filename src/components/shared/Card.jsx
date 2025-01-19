import PropTypes from 'prop-types'

const Card = ({
  image,
  imageAlt,
  title,
  description,
  price,
  unit,
  features,
  actions,
  extraInfo,
  category,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] hover:translate-y-[-8px] transition-all duration-300 border border-gray-200/50 hover:border-gray-300/50">
      <div className="relative">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-44 object-cover"
        />
        {category && (
          <div className="absolute top-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
            {category}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        {features && features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Features</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="text-gray-600 text-sm flex items-center">
                  <svg
                    className="w-4 h-4 text-lime-500 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            {price && (
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-lime-600">{price}</span>
                {unit && (
                  <span className="text-sm text-gray-500">per {unit}</span>
                )}
              </div>
            )}
          </div>
          {actions && (
            <div className="flex gap-2">{actions}</div>
          )}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string,
  unit: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  actions: PropTypes.node,
  extraInfo: PropTypes.node,
  category: PropTypes.string,
}

export default Card 