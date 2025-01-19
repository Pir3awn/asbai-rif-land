import PropTypes from 'prop-types'

const Card = ({
  image,
  imageAlt,
  title,
  description,
  price,
  features,
  actions,
  extraInfo,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-black mb-2">Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-600 flex items-center">
                <svg
                  className="w-4 h-4 text-lime-600 mr-2"
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

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-black">{price}</span>
            {extraInfo}
          </div>
          {actions}
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
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  actions: PropTypes.node,
  extraInfo: PropTypes.node,
}

export default Card 