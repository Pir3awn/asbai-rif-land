import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren"
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
      staggerChildren: 0.05,
      delayChildren: 0.1,
      when: "beforeChildren"
    }
  }
}

const itemVariants = {
  closed: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2
    }
  }
}

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
}

const MobileMenu = ({ isOpen, navItems, onClose }) => {
  const location = useLocation()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden fixed inset-x-0 top-16 bg-white z-40 border-b"
        >
          <motion.div 
            className="max-w-7xl mx-auto px-4 py-2 divide-y divide-gray-100"
            variants={menuVariants}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.to
              return (
                <motion.div
                  key={item.to}
                  variants={itemVariants}
                  className="py-1"
                >
                  <Link
                    to={item.to}
                    className={`block px-3 py-2 text-base font-medium ${
                      isActive 
                        ? 'text-gray-900 bg-gray-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired
}

export default MobileMenu 