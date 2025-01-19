import { useTranslation } from 'react-i18next'
import { BookableSection } from '../shared'

const Camping = () => {
  const { t } = useTranslation()

  const campingSites = [
    {
      id: 1,
      titleKey: 'camping.mountainSite.title',
      descriptionKey: 'camping.mountainSite.description',
      price: 50,
      image: '/camping/mountain-site.jpg',
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
      image: '/camping/riverside-camp.jpg',
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
      image: '/camping/forest-retreat.jpg',
      features: [
        'camping.forestRetreat.features.forestView',
        'camping.forestRetreat.features.privacy',
        'camping.forestRetreat.features.fireRing',
        'camping.forestRetreat.features.tentPlatform'
      ],
      capacity: 4,
    },
  ]

  return (
    <BookableSection
      id="camping"
      titleKey="camping.title"
      descriptionKey="camping.description"
      items={campingSites}
      type="camping"
      background="bg-gray-50"
    />
  )
}

export default Camping 