import { useTranslation } from 'react-i18next'
import { useCart } from '../../context/CartContext'
import amande from '../../assets/images/amande.png'
import grape from '../../assets/images/grape.png'
import honey from '../../assets/images/honey.png'
import oil2 from '../../assets/images/oil2.png'

const products = [
  {
    id: 1,
    name: 'Naturel Almond',
    price: '120DH/kg',
    image: amande
  },
  {
    id: 2,
    name: 'Honey',
    price: '120DH/jar',
    image: honey
  },
  {
    id: 3,
    name: 'Naturel Grapes',
    price: '70DH/kg',
    image: grape
  },
  {
    id: 4,
    name: 'Huile d\'olive',
    price: '120DH/L',
    image: oil2
  }
]

const Products = () => {
  const { t } = useTranslation()
  const { addToCart } = useCart()

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">{t('products.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('products.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-black">{product.price}</span>
                  <button
                    onClick={() => addToCart({
                      id: product.id,
                      title: product.name,
                      price: product.price,
                      image: product.image,
                      type: 'product'
                    })}
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-lime-600 transform hover:scale-[1.02] transition-all duration-300"
                  >
                    {t('products.addToCart')}
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

export default Products 