import { createContext, useContext, useState } from 'react'

const BookingContext = createContext()

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([])
  const [selectedDates, setSelectedDates] = useState({
    checkIn: null,
    checkOut: null,
  })

  const addBooking = (booking) => {
    setBookings((prev) => [...prev, { ...booking, id: Date.now() }])
  }

  const removeBooking = (bookingId) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== bookingId))
  }

  const updateDates = (dates) => {
    setSelectedDates(dates)
  }

  const checkAvailability = (type, id, checkIn, checkOut) => {
    // Check if there are any overlapping bookings
    return !bookings.some(
      (booking) =>
        booking.type === type &&
        booking.itemId === id &&
        ((new Date(checkIn) >= new Date(booking.checkIn) &&
          new Date(checkIn) <= new Date(booking.checkOut)) ||
          (new Date(checkOut) >= new Date(booking.checkIn) &&
            new Date(checkOut) <= new Date(booking.checkOut)))
    )
  }

  const value = {
    bookings,
    selectedDates,
    addBooking,
    removeBooking,
    updateDates,
    checkAvailability,
  }

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
} 