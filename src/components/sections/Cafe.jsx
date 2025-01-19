import { useTranslation } from 'react-i18next'
import { useCart } from '../../context/CartContext'
import { Section, Button } from '../shared'
import tajine from '../../assets/images/tajine.jpeg'
import petit from '../../assets/images/pd.png'
import the from '../../assets/images/the.png'
import salad from '../../assets/images/salade.jpg'

const menuItems = [
  {
    id: 1,
    titleKey: 'cafe.menu.moroccanBreakfast.title',
    descriptionKey: 'cafe.menu.moroccanBreakfast.description',
    categoryKey: 'cafe.menu.moroccanBreakfast.category',
    price: '50 DH',
    image: petit
  },
  {
    id: 2,
    titleKey: 'cafe.menu.farmSalad.title',
    descriptionKey: 'cafe.menu.farmSalad.description',
    categoryKey: 'cafe.menu.farmSalad.category',
    price: '45 DH',
    image: salad
  },
  {
    id: 3,
    titleKey: 'cafe.menu.tajine.title',
    descriptionKey: 'cafe.menu.tajine.description',
    categoryKey: 'cafe.menu.tajine.category',
    price: '80 DH',
    image: tajine
  },
  {
    id: 4,
    titleKey: 'cafe.menu.mintTea.title',
    descriptionKey: 'cafe.menu.mintTea.description',
    categoryKey: 'cafe.menu.mintTea.category',
    price: '15 DH',
    image: the
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
      className="bg-gray-50"
    >
      <p className="text-lime-600 text-center mt-2 mb-12">
        {t('cafe.openingHours')} - {t('cafe.daily')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90rem] mx-auto px-4">
        {menuItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] transition-all duration-300 hover:translate-y-[-8px] overflow-hidden"
          >
            <div className="relative h-52">
              <img
                src={item.image}
                alt={t(item.titleKey)}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col min-h-[280px]">
              <div>
                <span className="text-sm font-medium text-lime-600 mb-1 block">{t(item.categoryKey)}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t(item.titleKey)}</h3>
              </div>
              <p className="text-gray-600 mb-auto line-clamp-2">{t(item.descriptionKey)}</p>
              
              <div className="mb-6">
                <span className="text-2xl font-bold text-lime-600">{item.price}</span>
              </div>

              <div>
                <Button onClick={() => handleAddToCart(item)} className="w-full">
                  {t('cafe.order')}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Cafe 