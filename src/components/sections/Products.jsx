import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCart } from '../../context/CartContext'
import { Section, ProductCard, Button, QuickView } from '../shared'
import { formatPrice } from '../../utils/formatters'
import amande from '../../assets/images/amande.png'
import grape from '../../assets/images/grape.png'
import honey from '../../assets/images/honey.png'
import oil2 from '../../assets/images/oil2.png'
import olive from '../../assets/images/olive.png'

const Products = () => {
  const { t } = useTranslation()
  const { addToCart } = useCart()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  const products = [
    {
      id: 1,
      titleKey: 'products.almonds.title',
      descriptionKey: 'products.almonds.description',
      price: 120,
      unit: 'kg',
      image: amande,
      features: [
        'products.almonds.features.organic',
        'products.almonds.features.handPicked',
        'products.almonds.features.premium'
      ],
      category: 'nuts',
      stock: 100
    },
    {
      id: 4,
      titleKey: 'products.oil.title',
      descriptionKey: 'products.oil.description',
      price: 120,
      unit: '1l',
      image: oil2,
      features: [
        'products.oil.features.extraVirgin',
        'products.oil.features.coldPressed',
        'products.oil.features.organic'
      ],
      category: 'oils',
      stock: 75
    },
    {
      id: 2,
      titleKey: 'products.grapes.title',
      descriptionKey: 'products.grapes.description',
      price: 30,
      unit: '1kg',
      image: grape,
      features: [
        'products.grapes.features.fresh',
        'products.grapes.features.organic',
        'products.grapes.features.sweet'
      ],
      category: 'fruits',
      stock: 50
    },
    {
      id: 3,
      titleKey: 'products.honey.title',
      descriptionKey: 'products.honey.description',
      price: 120,
      unit: '1L',
      image: honey,
      features: [
        'products.honey.features.pure',
        'products.honey.features.raw',
        'products.honey.features.natural'
      ],
      category: 'honey',
      stock: 30
    },
    {
      id: 5,
      titleKey: 'products.olives.title',
      descriptionKey: 'products.olives.description',
      price: 45,
      unit: '500g',
      image: olive,
      features: [
        'products.olives.features.organic',
        'products.olives.features.premium',
        'products.olives.features.fresh'
      ],
      category: 'fruits',
      stock: 10
    }
  ]

  const handleQuickView = (product) => {
    setSelectedProduct(product)
    setIsQuickViewOpen(true)
  }

  const handleAddToCart = (product, quantity = 1) => {
    addToCart({
      id: product.id,
      title: t(product.titleKey),
      price: product.price,
      image: product.image,
      quantity
    })
  }

  const handleBuyNow = (product, quantity) => {
    handleAddToCart(product, quantity)
    setIsQuickViewOpen(false)
  }

  const getFormattedProduct = (product) => ({
    title: t(product.titleKey),
    description: t(product.descriptionKey),
    image: product.image,
    features: product.features.map(feature => t(feature)),
    stock: product.stock,
    formattedPrice: formatPrice(product.price)
  })

  return (
    <Section
      id="products"
      title={t('products.title')}
      description={t('products.description')}
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 max-w-[90rem] mx-auto px-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            imageAlt={t(product.titleKey)}
            title={t(product.titleKey)}
            description={t(product.descriptionKey)}
            price={formatPrice(product.price)}
            unit={product.unit}
            features={product.features.map(feature => t(feature))}
            category={product.category}
            stock={product.stock}
            actions={
              <div className="flex gap-2 w-full">
                <Button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                  className="flex-1"
                >
                  {t('products.addToCart')}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleQuickView(product)}
                  className="px-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Button>
              </div>
            }
          />
        ))}
      </div>

      {selectedProduct && (
        <QuickView
          isOpen={isQuickViewOpen}
          onClose={() => setIsQuickViewOpen(false)}
          product={getFormattedProduct(selectedProduct)}
          onAddToCart={(quantity) => handleBuyNow(selectedProduct, quantity)}
          buttonText={t('products.buyNow')}
        />
      )}
    </Section>
  )
}

export default Products 