import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useTranslation()

  const slides = [
    {
      url: '/hero1.jpg',
      titleKey: 'hero.welcome',
      subtitleKey: 'hero.subtitle',
    },
    {
      url: '/hero2.jpg',
      titleKey: 'hero.organic',
      subtitleKey: 'hero.sustainable',
    },
    {
      url: '/hero3.jpg',
      titleKey: 'hero.getaway',
      subtitleKey: 'hero.relax',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen">
      {/* Image Slider */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={slide.url}
              alt={t(slide.titleKey)}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
                {t(slide.titleKey)}
              </h1>
              <p className="text-xl md:text-2xl text-lime-400">{t(slide.subtitleKey)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-lime-400' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero 