const Cafe = () => {
  const menuCategories = [
    {
      id: 1,
      name: 'Hot Drinks',
      items: [
        { name: 'Farm Coffee', price: '3.50€', description: 'Locally sourced coffee beans' },
        { name: 'Mountain Tea', price: '3.00€', description: 'Herbal tea with local herbs' },
        { name: 'Hot Chocolate', price: '4.00€', description: 'Rich and creamy chocolate' }
      ]
    },
    {
      id: 2,
      name: 'Fresh Pastries',
      items: [
        { name: 'Croissant', price: '2.50€', description: 'Freshly baked daily' },
        { name: 'Apple Pie', price: '4.50€', description: 'Made with local apples' },
        { name: 'Chocolate Muffin', price: '3.00€', description: 'Rich chocolate flavor' }
      ]
    },
    {
      id: 3,
      name: 'Light Meals',
      items: [
        { name: 'Farm Sandwich', price: '8.50€', description: 'Fresh vegetables and local cheese' },
        { name: 'Garden Salad', price: '7.00€', description: 'Seasonal vegetables from our garden' },
        { name: 'Soup of the Day', price: '6.00€', description: 'Made with fresh ingredients' }
      ]
    }
  ]

  return (
    <section id="cafe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Farm Cafe</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the taste of nature in our cozy cafe. Enjoy fresh coffee, homemade pastries, 
            and light meals while overlooking the beautiful farm landscape.
          </p>
        </div>

        {/* Cafe Image */}
        <div className="relative h-96 mb-16 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3"
            alt="Farm Cafe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-2">Opening Hours</h3>
              <p className="text-xl">Daily: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-lg shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-black mb-6 pb-2 border-b border-lime-500">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-black">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-lime-600 font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-lime-600 transition-colors duration-300">
            Make a Reservation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cafe 