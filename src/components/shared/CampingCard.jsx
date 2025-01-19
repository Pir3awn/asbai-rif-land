import PropTypes from 'prop-types'
import { Card } from '.'
import { useTranslation } from 'react-i18next'
import { UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline'

const CampingCard = ({
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

  const extraInfo = (
    <div className="flex items-center gap-4 text-sm text-gray-600">
      <div className="flex items-center gap-1">
        <UserGroupIcon className="h-5 w-5" />
        <span>{t('camping.maxGuests', { count: capacity })}</span>
      </div>
      <div className="flex items-center gap-1">
        <ClockIcon className="h-5 w-5" />
        <span>{t('camping.checkIn', { time: '14:00' })}</span>
      </div>
    </div>
  )

  return (
    <Card
      id={id}
      image={image}
      imageAlt={imageAlt}
      title={title}
      description={description}
      price={price}
      features={features}
      actions={actions}
      extraInfo={extraInfo}
      {...props}
    />
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
  capacity: PropTypes.number.isRequired,
  actions: PropTypes.node,
}

export default CampingCard 