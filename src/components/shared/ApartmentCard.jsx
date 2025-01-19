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
    />
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