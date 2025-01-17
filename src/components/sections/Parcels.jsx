import pc from '../../assets/images/pc.png'

const Parcels = () => {
  const parcels = [
    {
      id: 1,
      title: 'Mountain View Parcel',
      size: '1000 m²',
      price: '50,000€',
      features: [
        'Mountain View',
        'Natural Water Source',
        'Road Access',
        'Electricity Available'
      ],
      description: 'Perfect plot for building your dream mountain home',
      image: pc,
    },
    {
      id: 2,
      title: 'Farmland Plot',
      size: '2500 m²',
      price: '75,000€',
      features: [
        'Fertile Soil',
        'Irrigation System',
        'Farm Equipment Access',
        'Storage Facility'
      ],
      description: 'Ideal for agricultural activities and farming',
      image: pc,
    },
    {
      id: 3,
      title: 'Riverside Land',
      size: '1500 m²',
      price: '65,000€',
      features: [
        'River Access',
        'Flat Terrain',
        'Private Road',
        'Utilities Ready'
      ],
      description: 'Beautiful plot with river access and peaceful surroundings',
      image: pc,
    }
  ]

  return (
    <section id="parcels" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Land Parcels</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Invest in your piece of paradise with our premium land parcels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parcels.map((parcel) => (
            <div
              key={parcel.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={parcel.image}
                  alt={parcel.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-lime-500 text-white px-4 py-2 rounded-full">
                  {parcel.size}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-black mb-2">
                  {parcel.title}
                </h3>
                <p className="text-gray-600 mb-4">{parcel.description}</p>

                <div className="space-y-4">
                  <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                    <span className="text-gray-600">Price</span>
                    <span className="text-2xl font-bold text-black">{parcel.price}</span>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-semibold text-black mb-2">Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {parcel.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <svg
                            className="h-5 w-5 text-lime-500 mr-2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-lime-600 transition-colors duration-300">
                  Request Information
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-black mb-4">Interested in a Land Parcel?</h3>
          <p className="text-gray-600 mb-6">
            Contact our land specialists for detailed information and site visits
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-lime-600 transition-colors duration-300">
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  )
}

export default Parcels 