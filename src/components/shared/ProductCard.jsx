import PropTypes from 'prop-types'
import { Card } from '.'
import { useTranslation } from 'react-i18next'

const ProductCard = ({
  id,
  image,
  imageAlt,
  title,
  description,
  price,
  features,
  category,
  stock,
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
        <div className="text-sm text-gray-600 mt-2 space-y-1">
          <div className="flex items-center">
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
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            <span>
              <span className="font-semibold">{t('products.category')}:</span>{' '}
              {t(`products.categories.${category}`)}
            </span>
          </div>
          <div className="flex items-center">
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
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <span>
              <span className="font-semibold">{t('products.stock')}:</span>{' '}
              {stock > 0 ? stock : t('products.outOfStock')}
            </span>
          </div>
        </div>
      }
    />
  )
}

ProductCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  actions: PropTypes.node,
}

export default ProductCard 