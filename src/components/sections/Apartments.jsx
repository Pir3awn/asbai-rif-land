import { useState } from 'react'
import BookingModal from '../booking/BookingModal'

const apartments = [
  {
    id: 1,
    title: 'Luxury Farm Suite',
    description: 'Spacious suite with panoramic views of the farm and mountains',
    price: 200,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    features: ['King bed', 'Full kitchen', 'Private balcony', 'Mountain view'],
    capacity: 2,
  },
  {
    id: 2,
    title: 'Family Cottage',
    description: 'Perfect for families, with direct access to farm activities',
    price: 300,
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    features: ['2 Bedrooms', 'Kitchen', 'Living room', 'Farm view'],
    capacity: 4,
  },
  {
    id: 3,
    title: 'Garden Studio',
    description: 'Cozy studio apartment surrounded by our organic gardens',
    price: 150,
    image: 'https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    features: ['Queen bed', 'Kitchenette', 'Garden access', 'Private patio'],
    capacity: 2,
  },
]

const Apartments = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedApartment, setSelectedApartment] = useState(null)

  const handleBookClick = (apartment) => {
    setSelectedApartment(apartment)
    setIsBookingModalOpen(true)
  }

  return (
    <section id="apartments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Our Apartments</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience comfort and tranquility in our thoughtfully designed farm apartments.
            Each space offers unique views and amenities for an unforgettable stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment) => (
            <div
              key={apartment.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={apartment.image}
                  alt={apartment.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{apartment.title}</h3>
                <p className="text-gray-600 mb-4">{apartment.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-black mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {apartment.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 flex items-center">
                        <svg
                          className="w-4 h-4 text-lime-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-black">
                    <span className="text-2xl font-bold">${apartment.price}</span>
                    <span className="text-gray-600"> / night</span>
                  </div>
                  <button
                    onClick={() => handleBookClick(apartment)}
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-lime-600 transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedApartment && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          type="apartment"
          itemId={selectedApartment.id}
          price={selectedApartment.price}
          title={selectedApartment.title}
        />
      )}
    </section>
  )
}

export default Apartments 