import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const LoadingBar = ({ isLoading }) => {
  const controls = useAnimation()

  useEffect(() => {
    if (isLoading) {
      controls.set({ scaleX: 0 })
      controls.start({
        scaleX: 0.8,
        transition: {
          duration: 0.8,
          ease: 'easeInOut'
        }
      }).then(() => {
        controls.start({
          scaleX: 0.95,
          transition: {
            duration: 0.3,
            ease: 'easeInOut'
          }
        })
      })
    } else {
      controls.start({
        scaleX: 1,
        transition: {
          duration: 0.2,
          ease: 'easeOut'
        }
      }).then(() => {
        controls.start({
          opacity: 0,
          transition: {
            duration: 0.2,
            ease: 'easeOut'
          }
        })
      })
    }
  }, [isLoading, controls])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="h-0.5 bg-gray-900"
        style={{ originX: 0 }}
        initial={{ scaleX: 0 }}
        animate={controls}
      />
    </div>
  )
}

export default LoadingBar 