import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import BookingModal from '../booking/BookingModal'

const Camping = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedSite, setSelectedSite] = useState(null)
  const { t } = useTranslation()

  const campingSites = [
    {
      id: 1,
      titleKey: 'camping.mountainSite.title',
      descriptionKey: 'camping.mountainSite.description',
      price: 50,
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'camping.mountainSite.features.mountainView',
        'camping.mountainSite.features.firePit',
        'camping.mountainSite.features.picnicTable',
        'camping.mountainSite.features.waterAccess'
      ],
      capacity: 6,
    },
    {
      id: 2,
      titleKey: 'camping.riversideCamp.title',
      descriptionKey: 'camping.riversideCamp.description',
      price: 45,
      image: 'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1447&q=80',
      features: [
        'camping.riversideCamp.features.riverAccess',
        'camping.riversideCamp.features.shadedArea',
        'camping.riversideCamp.features.bbqGrill',
        'camping.riversideCamp.features.parkingSpot'
      ],
      capacity: 4,
    },
    {
      id: 3,
      titleKey: 'camping.forestRetreat.title',
      descriptionKey: 'camping.forestRetreat.description',
      price: 40,
      image: 'https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      features: [
        'camping.forestRetreat.features.forestView',
        'camping.forestRetreat.features.privacy',
        'camping.forestRetreat.features.fireRing',
        'camping.forestRetreat.features.tentPlatform'
      ],
      capacity: 4,
    },
  ]

  const handleBookClick = (site) => {
    setSelectedSite(site)
    setIsBookingModalOpen(true)
  }

  return (
    <section id="camping" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">{t('camping.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('camping.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campingSites.map((site) => (
            <div
              key={site.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={site.image}
                  alt={t(site.titleKey)}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{t(site.titleKey)}</h3>
                <p className="text-gray-600 mb-4">{t(site.descriptionKey)}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-black mb-2">{t('camping.features')}:</h4>
                  <ul className="space-y-1">
                    {site.features.map((feature, index) => (
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
                    <span className="text-2xl font-bold">${site.price}</span>
                    <span className="text-gray-600">{t('camping.perNight')}</span>
                  </div>
                  <button
                    onClick={() => handleBookClick(site)}
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-lime-600 transform hover:scale-[1.02] transition-all duration-300"
                  >
                    {t('camping.bookNow')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedSite && (
          <BookingModal
            isOpen={isBookingModalOpen}
            onClose={() => setIsBookingModalOpen(false)}
            type="camping"
            itemId={selectedSite.id}
            price={selectedSite.price}
            title={t(selectedSite.titleKey)}
          />
        )}
      </div>
    </section>
  )
}

export default Camping 