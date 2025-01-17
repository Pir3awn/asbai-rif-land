import amande from '../../assets/images/amande.png'
import grape from '../../assets/images/grape.png'
import honey from '../../assets/images/honey.png'
import oil2 from '../../assets/images/oil2.png'
import { useCart } from '../../context/CartContext'

const Products = () => {
  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      name: 'Naturel Almond',
      price: '120DH/kg',
      image: amande,
    },
    {
      id: 2,
      name: 'Honey',
      price: '120DH/jar',
      image: honey,
    },
    {
      id: 3,
      name: 'Naturel Grapes',
      price: '70DH/kg',
      image: grape,
    },
    {
      id: 4,
      name: 'Huile d\'olive',
      price: '120DH/L',
      image: oil2
    }
  ]

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Farm Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fresh, organic products straight from our farm to your table
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-lime-500 text-white px-3 py-1 rounded-full text-sm">
                  {product.availability}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-lime-600 uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-black font-bold">{product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-lime-600 transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Want to get regular deliveries of our fresh products?
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-lime-600 transition-colors duration-300">
            Subscribe to Weekly Basket
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products 