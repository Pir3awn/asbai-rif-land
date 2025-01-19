import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { useBooking } from '../../context/BookingContext'
import { Button } from '.'
import PropTypes from 'prop-types'

const BookingModal = ({ isOpen, onClose, item, type }) => {
  const { t } = useTranslation()
  const { submitBooking, loading, error } = useBooking()
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    const result = await submitBooking({
      ...data,
      itemId: item.id,
      type,
      price: item.price
    })

    if (result.success) {
      reset()
      onClose()
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 mb-4"
                >
                  {t('booking.title', { name: item.title })}
                </Dialog.Title>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      {t('booking.form.firstName')}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      {...register('firstName', { required: true })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">
                        {t('booking.errors.required', { field: t('booking.form.firstName') })}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      {t('booking.form.lastName')}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      {...register('lastName', { required: true })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">
                        {t('booking.errors.required', { field: t('booking.form.lastName') })}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      {t('booking.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { required: true })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {t('booking.errors.required', { field: t('booking.form.email') })}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      {t('booking.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', { required: true })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {t('booking.errors.required', { field: t('booking.form.phone') })}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">
                      {t('booking.form.checkIn')}
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      {...register('checkIn', { required: true })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                    />
                    {errors.checkIn && (
                      <p className="mt-1 text-sm text-red-600">
                        {t('booking.errors.required', { field: t('booking.form.checkIn') })}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">
                      {t('booking.form.checkOut')}
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      {...register('checkOut', { required: true })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                    />
                    {errors.checkOut && (
                      <p className="mt-1 text-sm text-red-600">
                        {t('booking.errors.required', { field: t('booking.form.checkOut') })}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                      {t('booking.form.guests')}
                    </label>
                    <input
                      type="number"
                      id="guests"
                      min="1"
                      max="10"
                      {...register('guests', { required: true, min: 1, max: 10 })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                    />
                    {errors.guests && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.guests.type === 'required'
                          ? t('booking.errors.required', { field: t('booking.form.guests') })
                          : t(`booking.errors.guests.${errors.guests.type}`)}
                      </p>
                    )}
                  </div>

                  {error && (
                    <div className="rounded-md bg-red-50 p-4">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

                  <div className="mt-6 flex justify-end space-x-3">
                    <Button onClick={onClose} variant="secondary">
                      {t('common.close')}
                    </Button>
                    <Button type="submit" disabled={loading}>
                      {loading ? t('booking.form.processing') : t('booking.form.submit')}
                    </Button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

BookingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
}

export default BookingModal 