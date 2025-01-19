import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const BookingContext = createContext()

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}

export const BookingProvider = ({ children }) => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const validateBooking = (formData) => {
    const errors = {}
    
    if (!formData.firstName) errors.firstName = t('booking.errors.required', { field: t('booking.form.firstName') })
    if (!formData.lastName) errors.lastName = t('booking.errors.required', { field: t('booking.form.lastName') })
    if (!formData.email) errors.email = t('booking.errors.required', { field: t('booking.form.email') })
    if (!formData.phone) errors.phone = t('booking.errors.required', { field: t('booking.form.phone') })
    if (!formData.checkIn) errors.checkIn = t('booking.errors.required', { field: t('booking.form.checkIn') })
    if (!formData.checkOut) errors.checkOut = t('booking.errors.required', { field: t('booking.form.checkOut') })
    if (!formData.guests) errors.guests = t('booking.errors.required', { field: t('booking.form.guests') })

    // Additional validations
    if (formData.checkIn && new Date(formData.checkIn) < new Date().setHours(0, 0, 0, 0)) {
      errors.checkIn = t('booking.errors.dates.past')
    }

    if (formData.checkIn && formData.checkOut && new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      errors.checkOut = t('booking.errors.dates.invalid')
    }

    if (formData.guests && (formData.guests < 1 || formData.guests > 10)) {
      errors.guests = formData.guests < 1 ? t('booking.errors.guests.min') : t('booking.errors.guests.max')
    }

    return errors
  }

  const submitBooking = async (formData) => {
    setLoading(true)
    setError(null)

    try {
      // Validate form data
      const errors = validateBooking(formData)
      if (Object.keys(errors).length > 0) {
        throw errors
      }

      // Here you would typically make an API call to submit the booking
      // For now, we'll simulate a successful booking
      await new Promise(resolve => setTimeout(resolve, 1000))

      setLoading(false)
      return { success: true }
    } catch (err) {
      setLoading(false)
      setError(err)
      return { success: false, errors: err }
    }
  }

  const value = {
    loading,
    error,
    submitBooking,
    validateBooking
  }

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

BookingProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BookingProvider 