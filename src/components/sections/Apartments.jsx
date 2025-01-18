import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import BookingModal from '../booking/BookingModal'

const Apartments = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedApartment, setSelectedApartment] = useState(null)
  const { t } = useTranslation()

  const apartments = [
    {
      id: 1,
      titleKey: 'apartments.luxurySuite.title',
      descriptionKey: 'apartments.luxurySuite.description',
      price: 200,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'apartments.luxurySuite.features.kingBed',
        'apartments.luxurySuite.features.fullKitchen',
        'apartments.luxurySuite.features.privateBalcony',
        'apartments.luxurySuite.features.mountainView'
      ],
      capacity: 2,
    },
    {
      id: 2,
      titleKey: 'apartments.familyCottage.title',
      descriptionKey: 'apartments.familyCottage.description',
      price: 300,
      image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'apartments.familyCottage.features.bedrooms',
        'apartments.familyCottage.features.kitchen',
        'apartments.familyCottage.features.livingRoom',
        'apartments.familyCottage.features.farmView'
      ],
      capacity: 4,
    },
    {
      id: 3,
      titleKey: 'apartments.gardenStudio.title',
      descriptionKey: 'apartments.gardenStudio.description',
      price: 150,
      image: 'https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'apartments.gardenStudio.features.queenBed',
        'apartments.gardenStudio.features.kitchenette',
        'apartments.gardenStudio.features.gardenAccess',
        'apartments.gardenStudio.features.privatePatio'
      ],
      capacity: 2,
    },
  ]

  const handleBookClick = (apartment) => {
    setSelectedApartment(apartment)
    setIsBookingModalOpen(true)
  }

  return (
    <section id="apartments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">{t('apartments.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('apartments.description')}
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
                  alt={t(apartment.titleKey)}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{t(apartment.titleKey)}</h3>
                <p className="text-gray-600 mb-4">{t(apartment.descriptionKey)}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-black mb-2">{t('apartments.features')}:</h4>
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
                        {t(feature)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-black">
                    <span className="text-2xl font-bold">${apartment.price}</span>
                    <span className="text-gray-600">{t('apartments.perNight')}</span>
                  </div>
                  <button
                    onClick={() => handleBookClick(apartment)}
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-lime-600 transform hover:scale-[1.02] transition-all duration-300"
                  >
                    {t('apartments.bookNow')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedApartment && (
          <BookingModal
            isOpen={isBookingModalOpen}
            onClose={() => setIsBookingModalOpen(false)}
            type="apartment"
            itemId={selectedApartment.id}
            price={selectedApartment.price}
            title={t(selectedApartment.titleKey)}
          />
        )}
      </div>
    </section>
  )
}

export default Apartments 