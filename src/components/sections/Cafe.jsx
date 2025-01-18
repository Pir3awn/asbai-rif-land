import { useTranslation } from 'react-i18next'
import { useCart } from '../../context/CartContext'

const menuItems = [
  {
    id: 1,
    titleKey: 'cafe.menu.moroccanBreakfast.title',
    descriptionKey: 'cafe.menu.moroccanBreakfast.description',
    categoryKey: 'cafe.menu.moroccanBreakfast.category',
    price: '50 DH',
    image: '/breakfast.jpg'
  },
  {
    id: 2,
    titleKey: 'cafe.menu.farmSalad.title',
    descriptionKey: 'cafe.menu.farmSalad.description',
    categoryKey: 'cafe.menu.farmSalad.category',
    price: '45 DH',
    image: '/salad.jpg'
  },
  {
    id: 3,
    titleKey: 'cafe.menu.tajine.title',
    descriptionKey: 'cafe.menu.tajine.description',
    categoryKey: 'cafe.menu.tajine.category',
    price: '80 DH',
    image: '/tajine.jpg'
  },
  {
    id: 4,
    titleKey: 'cafe.menu.mintTea.title',
    descriptionKey: 'cafe.menu.mintTea.description',
    categoryKey: 'cafe.menu.mintTea.category',
    price: '15 DH',
    image: '/tea.jpg'
  }
]

const Cafe = () => {
  const { t } = useTranslation()
  const { addToCart } = useCart()

  return (
    <section id="cafe" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">{t('cafe.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('cafe.description')}
          </p>
          <p className="text-lime-600 mt-2">
            {t('cafe.openingHours')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-lime-600 mb-2">{t(item.categoryKey)}</div>
                <h3 className="text-xl font-bold text-black mb-2">{t(item.titleKey)}</h3>
                <p className="text-gray-600 mb-4">{t(item.descriptionKey)}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-black">{item.price}</span>
                  <button
                    onClick={() => addToCart({
                      id: item.id,
                      title: t(item.titleKey),
                      price: item.price,
                      image: item.image,
                      type: 'cafe'
                    })}
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-lime-600 transform hover:scale-[1.02] transition-all duration-300"
                  >
                    {t('cafe.order')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cafe 