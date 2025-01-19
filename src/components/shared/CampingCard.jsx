import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Button } from '.'

const CampingCard = ({
  id,
  image,
  imageAlt,
  title,
  description,
  price,
  features,
  actions
}) => {
  const { t } = useTranslation()

  return (
    <div className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] transition-all duration-300 hover:translate-y-[-8px] overflow-hidden h-full">
      <div className="relative h-52">
        <img
          src={image}
          alt={imageAlt}
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col h-[calc(100%-13rem)]">
        <div>
          <span className="text-sm font-medium text-lime-600 mb-1 block">{t('camping.features')}</span>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
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

        <div className="flex items-center mb-6">
          <span className="text-2xl font-bold text-lime-600">{price.split('/')[0]}</span>
          <span className="text-gray-900 text-sm ml-1">/ night</span>
        </div>

        <div>
          {actions}
        </div>
      </div>
    </div>
  )
}

CampingCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  actions: PropTypes.node
}

export default CampingCard 