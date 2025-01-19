import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Section, ParcelCard, Button, BookingModal } from '../shared'
import parcel from '../../assets/images/pc.png'

const Parcels = () => {
  const { t } = useTranslation()
  const [selectedParcel, setSelectedParcel] = useState(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const parcels = [
    {
      id: 1,
      title: t('parcels.mountainView'),
      description: t('parcels.mountainViewDesc'),
      price: 500000,
      image: parcel,
      features: [
        t('parcels.feature.mountainView'),
        t('parcels.feature.waterAccess'),
        t('parcels.feature.electricity'),
        t('parcels.feature.roadAccess')
      ],
      size: 1000
    },
    {
      id: 2,
      title: t('parcels.valleyView'),
      description: t('parcels.valleyViewDesc'),
      price: 450000,
      image: parcel,
      features: [
        t('parcels.feature.valleyView'),
        t('parcels.feature.waterAccess'),
        t('parcels.feature.electricity'),
        t('parcels.feature.roadAccess')
      ],
      size: 900
    },
    {
      id: 3,
      title: t('parcels.forestView'),
      description: t('parcels.forestViewDesc'),
      price: 400000,
      image: parcel,
      features: [
        t('parcels.feature.forestView'),
        t('parcels.feature.waterAccess'),
        t('parcels.feature.electricity'),
        t('parcels.feature.roadAccess')
      ],
      size: 800
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {parcels.map((parcel) => (
          <ParcelCard
            key={parcel.id}
            id={parcel.id}
            image={parcel.image}
            imageAlt={parcel.title}
            title={parcel.title}
            description={parcel.description}
            price={parcel.price}
            features={parcel.features}
            size={parcel.size}
            actions={
              <Button onClick={() => handleBook(parcel)}>
                {t('parcels.inquire')}
              </Button>
            }
          />
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