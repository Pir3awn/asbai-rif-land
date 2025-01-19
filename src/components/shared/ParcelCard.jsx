import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Card } from '.'
import { formatPrice } from '../../utils/formatters'

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

  const extraInfo = (
    <div className="text-sm text-gray-600">
      <span className="font-semibold">{t('parcels.size')}:</span> {size}m²
    </div>
  )

  return (
    <Card
      id={id}
      image={image}
      imageAlt={imageAlt}
      title={title}
      description={description}
      price={formatPrice(price)}
      priceLabel={t('parcels.price')}
      features={features}
      extraInfo={extraInfo}
      actions={actions}
      {...props}
    />
  )
}

ParcelCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.number.isRequired,
  actions: PropTypes.node,
}

export default ParcelCard 