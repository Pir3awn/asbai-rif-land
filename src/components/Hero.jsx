import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const images = [
  {
    url: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    position: 'center',
    // Majestic mountain peaks with green valleys
  },
  {
    url: 'https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg',
    position: 'center',
    // Dramatic mountain landscape with sunset
  },
  {
    url: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
    position: 'center',
    // Serene mountain lake surrounded by peaks
  }
]

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}

const Hero = () => {
  const { t } = useTranslation()
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = Math.abs(page % images.length)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 6000)
    return () => clearInterval(timer)
  }, [page])

  return (
    <section className="relative h-screen">
      {/* Hero background */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-no-repeat"
              style={{ 
                backgroundImage: `url(${images[imageIndex].url})`,
                backgroundPosition: images[imageIndex].position
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows - Hidden on mobile */}
        <div className="hidden md:block">
          <button
            className="absolute left-8 xl:left-16 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 rounded-full transition-all duration-300 group"
            onClick={() => paginate(-1)}
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 rounded-full transition-all duration-300 group"
            onClick={() => paginate(1)}
            aria-label="Next image"
          >
            <svg className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero content container */}
      <div className="relative h-full max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="h-full flex flex-col justify-center items-start max-w-2xl relative">
          {/* Background shape */}
          <div className="absolute -left-12 -top-12 w-[140%] h-[140%] bg-black/30 backdrop-blur-sm rounded-[60px] transform -rotate-6" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative z-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-lime-400 tracking-tight leading-tight font-display">
              {t('hero.welcome')} <br className="hidden sm:block" />
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-lime-100 font-medium max-w-lg font-display">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 sm:mt-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-lime-500 hover:bg-lime-400 text-black text-base sm:text-lg font-semibold rounded-lg transition-colors shadow-lg shadow-lime-500/20 font-display"
              >
                {t('hero.getaway')}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-12 left-6 sm:left-8 lg:left-12 xl:left-16 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage([index, index - imageIndex])}
              className={`h-1 transition-all duration-300 rounded-full ${
                imageIndex === index 
                  ? 'w-12 bg-lime-400' 
                  : 'w-3 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero 