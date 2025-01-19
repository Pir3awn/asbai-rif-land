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
  background
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
      price: `${formatPrice(item.price)} ${t(`${type}.perNight`)}`,
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
        background={background}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

BookableSection.defaultProps = {
  background: 'bg-white'
}

export default BookableSection 