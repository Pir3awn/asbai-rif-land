import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { Section, ParcelCard, ApartmentCard, CampingCard } from '.'
import BookingModal from './BookingModal'
import { formatPrice } from '../../utils/formatters'

const BookableSection = ({
  id,
  titleKey,
  descriptionKey,
  items,
  type,
  background = 'bg-white'
}) => {
  const { t } = useTranslation()
  const [selectedItem, setSelectedItem] = useState(null)

  const handleBook = (item) => {
    setSelectedItem(item)
  }

  const renderCard = (item) => {
    const commonProps = {
      id: item.id.toString(),
      image: item.image,
      imageAlt: t(item.titleKey),
      title: t(item.titleKey),
      description: t(item.descriptionKey),
      price: `${formatPrice(item.price)}`,
      unit: item.unit,
      features: item.features.map(key => t(key)),
      actions: (
        <button
          onClick={() => handleBook(item)}
          className="w-full px-4 py-2 text-sm font-medium text-white bg-lime-600 rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
        >
          {t(`${type}.bookNow`)}
        </button>
      )
    }

    switch (type) {
      case 'parcels':
        return (
          <ParcelCard
            {...commonProps}
            size={item.size}
          />
        )
      case 'apartments':
        return (
          <ApartmentCard
            {...commonProps}
            capacity={item.capacity}
          />
        )
      case 'camping':
        return (
          <CampingCard
            {...commonProps}
            capacity={item.capacity}
          />
        )
      default:
        return null
    }
  }

  return (
    <>
      <Section
        id={id}
        title={t(titleKey)}
        description={t(descriptionKey)}
        background="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 max-w-[90rem] mx-auto px-4">
          {items.map((item) => (
            <div key={item.id}>
              {renderCard(item)}
            </div>
          ))}
        </div>
      </Section>

      {selectedItem && (
        <BookingModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          item={selectedItem}
          type={type}
        />
      )}
    </>
  )
}

BookableSection.propTypes = {
  id: PropTypes.string.isRequired,
  titleKey: PropTypes.string.isRequired,
  descriptionKey: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    titleKey: PropTypes.string.isRequired,
    descriptionKey: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    capacity: PropTypes.number,
    size: PropTypes.number
  })).isRequired,
  type: PropTypes.oneOf(['apartments', 'camping', 'parcels']).isRequired,
  background: PropTypes.string
}

export default BookableSection 