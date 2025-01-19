import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCart } from '../../context/CartContext'
import { Section, ProductCard, Button, QuickView } from '../shared'
import { formatPrice } from '../../utils/formatters'
import amande from '../../assets/images/amande.png'
import grape from '../../assets/images/grape.png'
import honey from '../../assets/images/honey.png'
import oil2 from '../../assets/images/oil2.png'

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
      price: 50,
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
      id: 2,
      titleKey: 'products.grapes.title',
      descriptionKey: 'products.grapes.description',
      price: 30,
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
      id: 4,
      titleKey: 'products.oil.title',
      descriptionKey: 'products.oil.description',
      price: 80,
      image: oil2,
      features: [
        'products.oil.features.extraVirgin',
        'products.oil.features.coldPressed',
        'products.oil.features.organic'
      ],
      category: 'oils',
      stock: 75
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
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            imageAlt={t(product.titleKey)}
            title={t(product.titleKey)}
            description={t(product.descriptionKey)}
            price={formatPrice(product.price)}
            features={product.features.map(feature => t(feature))}
            category={product.category}
            stock={product.stock}
            actions={
              <div className="flex gap-2">
                <Button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                >
                  {t('products.addToCart')}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleQuickView(product)}
                >
                  {t('products.quickView')}
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