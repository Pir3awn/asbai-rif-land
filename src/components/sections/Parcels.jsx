import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Section, ParcelCard, Button, BookingModal } from '../shared'
import parcel from '../../assets/images/pc.png'
import { CheckIcon } from '@heroicons/react/24/outline'

const Parcels = () => {
  const { t } = useTranslation()
  const [selectedParcel, setSelectedParcel] = useState(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const parcels = [
    {
      id: 1,
      titleKey: 'parcels.mountainView',
      descriptionKey: 'parcels.mountainViewDesc',
      price: 5000,
      size: '500m²',
      image: parcel,
      features: [
        'parcels.feature.mountainView',
        'parcels.feature.waterAccess',
        'parcels.feature.electricity',
        'parcels.feature.roadAccess'
      ]
    },
    {
      id: 2,
      titleKey: 'parcels.valleyView',
      descriptionKey: 'parcels.valleyViewDesc',
      price: 2500,
      size: '250m²',
      image: parcel,
      features: [
        'parcels.feature.valleyView',
        'parcels.feature.waterAccess',
        'parcels.feature.electricity',
        'parcels.feature.roadAccess'
      ]
    }
  ]

  const handleBook = (parcel) => {
    setSelectedParcel(parcel)
    setIsBookingOpen(true)
  }

  return (
    <Section
      id="parcels"
      title={t('parcels.title')}
      description={t('parcels.description')}
    >
      <div className="flex justify-center items-start gap-8 flex-wrap max-w-7xl mx-auto px-4">
        {parcels.map((parcel) => (
          <div key={parcel.id} className="w-full md:w-[480px] bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <img
                src={parcel.image}
                alt={t(parcel.titleKey)}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{t(parcel.titleKey)}</h3>
              <p className="text-gray-600 mb-4">{t(parcel.descriptionKey)}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{t('parcels.price')}</p>
                  <p className="text-2xl font-bold text-lime-600">{parcel.price.toLocaleString()} DH</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{t('parcels.size')}</p>
                  <p className="text-2xl font-bold text-gray-900">{parcel.size}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-medium mb-2">{t('parcels.features')}</p>
                <ul className="space-y-2">
                  {parcel.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <CheckIcon className="w-5 h-5 text-lime-600" />
                      {t(feature)}
                    </li>
                  ))}
                </ul>
              </div>

              <Button onClick={() => handleBook(parcel)} className="w-full">
                {t('parcels.inquire')}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {selectedParcel && (
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          item={selectedParcel}
        />
      )}
    </Section>
  )
}

export default Parcels 