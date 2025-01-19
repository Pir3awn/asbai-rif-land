import { useTranslation } from 'react-i18next'
import { useCart } from '../../context/CartContext'
import { Section, Card, Button } from '../shared'

const menuItems = [
  {
    id: 1,
    titleKey: 'cafe.menu.moroccanBreakfast.title',
    descriptionKey: 'cafe.menu.moroccanBreakfast.description',
    categoryKey: 'cafe.menu.moroccanBreakfast.category',
    price: '50 DH',
    image: '/cafe/breakfast.jpg'
  },
  {
    id: 2,
    titleKey: 'cafe.menu.farmSalad.title',
    descriptionKey: 'cafe.menu.farmSalad.description',
    categoryKey: 'cafe.menu.farmSalad.category',
    price: '45 DH',
    image: '/cafe/salad.jpg'
  },
  {
    id: 3,
    titleKey: 'cafe.menu.tajine.title',
    descriptionKey: 'cafe.menu.tajine.description',
    categoryKey: 'cafe.menu.tajine.category',
    price: '80 DH',
    image: '/cafe/tajine.jpg'
  },
  {
    id: 4,
    titleKey: 'cafe.menu.mintTea.title',
    descriptionKey: 'cafe.menu.mintTea.description',
    categoryKey: 'cafe.menu.mintTea.category',
    price: '15 DH',
    image: '/cafe/tea.jpg'
  }
]

const Cafe = () => {
  const { t } = useTranslation()
  const { addToCart } = useCart()

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      title: t(item.titleKey),
      price: item.price,
      image: item.image,
      type: 'cafe'
    })
  }

  return (
    <Section
      id="cafe"
      title={t('cafe.title')}
      description={t('cafe.description')}
      background="bg-gray-50"
    >
      <p className="text-lime-600 text-center mt-2 mb-12">
        {t('cafe.openingHours')} - {t('cafe.daily')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            imageAlt={t(item.titleKey)}
            title={t(item.titleKey)}
            description={t(item.descriptionKey)}
            category={t(item.categoryKey)}
            price={item.price}
            actions={
              <Button
                onClick={() => handleAddToCart(item)}
                variant="primary"
              >
                {t('cafe.order')}
              </Button>
            }
          />
        ))}
      </div>
    </Section>
  )
}

export default Cafe 