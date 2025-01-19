import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const ParcelCard = ({
  id,
  image,
  imageAlt,
  title,
  description,
  price,
  features,
  size,
  actions,
  ...props
}) => {
  const { t } = useTranslation()

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] hover:translate-y-[-8px] transition-all duration-300 border border-gray-200/50 hover:border-gray-300/50">
      <div className="relative">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-44 object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <ul className="space-y-2 mb-auto">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
              <svg className="h-5 w-5 text-lime-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center gap-4 mb-6">
          <div>
            <span className="text-2xl font-bold text-lime-600">{price}</span>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">{t('parcels.size')}:</span>{' '}
            <span className="flex items-center">
              <svg
                className="w-4 h-4 text-gray-600 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
              {size}m²
            </span>
          </div>
        </div>

        <div>
          {actions}
        </div>
      </div>
    </div>
  )
}

ParcelCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.number.isRequired,
  actions: PropTypes.node,
}

export default ParcelCard 