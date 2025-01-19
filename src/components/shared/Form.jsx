import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { Button } from '.'

const Form = ({
  onSubmit,
  fields,
  submitText,
  isSubmitting = false,
  className = '',
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div
            key={field.name}
            className={field.fullWidth ? 'md:col-span-2' : ''}
          >
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                {...register(field.name, field.validation)}
                rows={4}
                className={`mt-1 block w-full rounded-md shadow-sm focus:border-lime-500 focus:ring-lime-500 ${
                  errors[field.name] ? 'border-red-300' : 'border-gray-300'
                }`}
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                {...register(field.name, field.validation)}
                className={`mt-1 block w-full rounded-md shadow-sm focus:border-lime-500 focus:ring-lime-500 ${
                  errors[field.name] ? 'border-red-300' : 'border-gray-300'
                }`}
              />
            )}
            {errors[field.name] && (
              <p className="mt-1 text-sm text-red-600">
                {errors[field.name].message}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? 'Submitting...' : submitText}
        </Button>
      </div>
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      validation: PropTypes.object,
      required: PropTypes.bool,
      fullWidth: PropTypes.bool,
    })
  ).isRequired,
  submitText: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool,
  className: PropTypes.string,
}

export default Form 