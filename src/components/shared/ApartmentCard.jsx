import PropTypes from 'prop-types'
import { Card } from '.'
import { useTranslation } from 'react-i18next'

const ApartmentCard = ({
  id,
  image,
  imageAlt,
  title,
  description,
  price,
  features,
  capacity,
  actions,
  ...props
}) => {
  const { t } = useTranslation()

  return (
    <Card
      {...props}
      image={image}
      imageAlt={imageAlt}
      title={title}
      description={description}
      price={price}
      features={features}
      actions={actions}
      extraInfo={
        <div className="text-sm text-gray-600 mt-2">
          <span className="font-semibold">{t('apartments.capacity')}:</span>{' '}
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {t('apartments.maxGuests', { count: capacity })}
          </span>
        </div>
      }
    >
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

      </div>

      <div>
        {actions}
      </div>
    </Card>
  )
}

ApartmentCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  capacity: PropTypes.number.isRequired,
  actions: PropTypes.node,
}

export default ApartmentCard 