import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import BookingModal from '../booking/BookingModal'

const Parcels = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedParcel, setSelectedParcel] = useState(null)
  const { t } = useTranslation()

  const parcels = [
    {
      id: 1,
      titleKey: 'parcels.mountainView',
      descriptionKey: 'parcels.mountainViewDesc',
      price: '500,000 DH',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      features: [
        'parcels.feature.mountainView',
        'parcels.feature.waterAccess',
        'parcels.feature.electricity',
        'parcels.feature.roadAccess'
      ],
      size: '1000m²'
    },
    {
      id: 2,
      titleKey: 'parcels.valleyView',
      descriptionKey: 'parcels.valleyViewDesc',
      price: '450,000 DH',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      features: [
        'parcels.feature.valleyView',
        'parcels.feature.waterAccess',
        'parcels.feature.electricity',
        'parcels.feature.roadAccess'
      ],
      size: '900m²'
    },
    {
      id: 3,
      titleKey: 'parcels.forestView',
      descriptionKey: 'parcels.forestViewDesc',
      price: '400,000 DH',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
      features: [
        'parcels.feature.forestView',
        'parcels.feature.waterAccess',
        'parcels.feature.electricity',
        'parcels.feature.roadAccess'
      ],
      size: '800m²'
    }
  ]

  const handleBookClick = (parcel) => {
    setSelectedParcel(parcel)
    setIsBookingModalOpen(true)
  }

  return (
    <section id="parcels" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">{t('parcels.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('parcels.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parcels.map((parcel) => (
            <div
              key={parcel.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={parcel.image}
                  alt={t(parcel.titleKey)}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{t(parcel.titleKey)}</h3>
                <p className="text-gray-600 mb-4">{t(parcel.descriptionKey)}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-black mb-2">{t('parcels.features')}:</h4>
                  <ul className="space-y-1">
                    {parcel.features.map((feature, index) => (
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
                  <div>
                    <span className="text-2xl font-bold text-black">{parcel.price}</span>
                    <div className="text-sm text-gray-600">{parcel.size}</div>
                  </div>
                  <button
                    onClick={() => handleBookClick(parcel)}
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-lime-600 transform hover:scale-[1.02] transition-all duration-300"
                  >
                    {t('parcels.inquire')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedParcel && (
          <BookingModal
            isOpen={isBookingModalOpen}
            onClose={() => setIsBookingModalOpen(false)}
            type="parcel"
            itemId={selectedParcel.id}
            price={selectedParcel.price}
            title={t(selectedParcel.titleKey)}
          />
        )}
      </div>
    </section>
  )
}

export default Parcels 