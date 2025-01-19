import { Fragment, useState, useMemo } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Button } from '.'
import { formatPrice } from '../../utils/formatters'

const QuickView = ({
  isOpen,
  onClose,
  product,
  onAddToCart,
  buttonText
}) => {
  const { t } = useTranslation()
  const [quantity, setQuantity] = useState(1)

  const totalPrice = useMemo(() => {
    const numericPrice = parseFloat(product.formattedPrice.replace(/[^\d]/g, ''))
    return formatPrice(numericPrice * quantity)
  }, [product.formattedPrice, quantity])

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value)
    if (value > 0 && value <= product.stock) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    onAddToCart(quantity)
    setQuantity(1) // Reset quantity after adding to cart
    onClose()
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex gap-6">
                  <div className="w-1/2">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="w-1/2 space-y-4">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold text-black"
                    >
                      {product.title}
                    </Dialog.Title>
                    <p className="text-gray-600">{product.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-black">{t('products.features')}:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-gray-600">{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-4">
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                          {t('products.quantity')}
                        </label>
                        <input
                          type="number"
                          id="quantity"
                          min="1"
                          max={product.stock}
                          value={quantity}
                          onChange={handleQuantityChange}
                          className="mt-1 block w-20 rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                        />
                      </div>
                      <div>
                        <div className="block text-sm font-medium text-gray-700">
                          {t('products.total')}
                        </div>
                        <div className="mt-1 text-2xl font-bold text-black">
                          {totalPrice}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">{t('products.stock')}:</span>{' '}
                        {product.stock > 0 ? product.stock : t('products.outOfStock')}
                      </div>
                      <Button
                        onClick={handleAddToCart}
                        disabled={product.stock === 0}
                      >
                        {buttonText || t('products.addToCart')}
                      </Button>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                  onClick={onClose}
                >
                  <span className="sr-only">{t('common.close')}</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

QuickView.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    stock: PropTypes.number.isRequired,
    formattedPrice: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
}

export default QuickView 