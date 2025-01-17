const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-black mb-4">404</h1>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-50 px-4 text-lg text-gray-500">Page Not Found</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="space-y-4">
          <a
            href="/"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-lime-600 transition-colors duration-300"
          >
            Go Back Home
          </a>
          
          <div className="flex flex-col items-center mt-8 space-y-2 text-gray-500">
            <p>Looking for something specific?</p>
            <div className="flex space-x-4">
              <a href="#apartments" className="hover:text-lime-600">Apartments</a>
              <span>•</span>
              <a href="#camping" className="hover:text-lime-600">Camping</a>
              <span>•</span>
              <a href="#products" className="hover:text-lime-600">Products</a>
            </div>
          </div>
        </div>

        {/* Farm illustration */}
        <div className="mt-12">
          <svg
            className="w-full max-w-sm mx-auto text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default NotFound 