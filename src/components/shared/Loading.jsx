import PropTypes from 'prop-types'

const Loading = ({ fullScreen = false }) => {
  const baseClasses = "flex items-center justify-center"
  const heightClasses = fullScreen ? "min-h-screen" : "min-h-[200px]"
  
  return (
    <div className={`${baseClasses} ${heightClasses}`}>
      <div className="flex flex-col items-center space-y-2">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-600" />
        <span className="text-sm text-gray-500 dark:text-gray-400">Loading...</span>
      </div>
    </div>
  )
}

Loading.propTypes = {
  fullScreen: PropTypes.bool
}

export default Loading 