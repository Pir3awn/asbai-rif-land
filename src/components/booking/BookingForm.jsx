import { useState } from 'react'
import { useBooking } from '../../context/BookingContext'

const BookingForm = ({ type, itemId, price, onSuccess }) => {
  const { addBooking, checkAvailability } = useBooking()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validate dates
    if (new Date(formData.checkIn) >= new Date(formData.checkOut)) {
      setError('Check-out date must be after check-in date')
      return
    }

    // Check availability
    const isAvailable = checkAvailability(
      type,
      itemId,
      formData.checkIn,
      formData.checkOut
    )

    if (!isAvailable) {
      setError('Selected dates are not available')
      return
    }

    // Calculate total price
    const days = Math.ceil(
      (new Date(formData.checkOut) - new Date(formData.checkIn)) /
        (1000 * 60 * 60 * 24)
    )
    const totalPrice = days * price

    // Create booking
    const booking = {
      ...formData,
      type,
      itemId,
      totalPrice,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    addBooking(booking)
    onSuccess(booking)

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: 1,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="checkIn"
            className="block text-sm font-medium text-gray-700"
          >
            Check-in Date
          </label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            required
            min={new Date().toISOString().split('T')[0]}
            value={formData.checkIn}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
          />
        </div>

        <div>
          <label
            htmlFor="checkOut"
            className="block text-sm font-medium text-gray-700"
          >
            Check-out Date
          </label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            required
            min={formData.checkIn || new Date().toISOString().split('T')[0]}
            value={formData.checkOut}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="guests"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Guests
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          required
          value={formData.guests}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-lime-600 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
      >
        Book Now
      </button>
    </form>
  )
}

export default BookingForm 