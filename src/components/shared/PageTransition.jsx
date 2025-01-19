import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
      scale: {
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1]
    }
  }
}

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

PageTransition.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageTransition 