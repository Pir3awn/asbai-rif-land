import { useTranslation } from 'react-i18next'
import { BookableSection } from '../shared'

const Apartments = () => {
  const { t } = useTranslation()

  const apartments = [
    {
      id: 1,
      titleKey: 'apartments.luxurySuite.title',
      descriptionKey: 'apartments.luxurySuite.description',
      price: 200,
      unit: 'night',
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
      unit: 'night',
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
      unit: 'night',
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

  return (
    <BookableSection
      id="apartments"
      titleKey="apartments.title"
      descriptionKey="apartments.description"
      items={apartments}
      type="apartments"
    />
  )
}

export default Apartments 