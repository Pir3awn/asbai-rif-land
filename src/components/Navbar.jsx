import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';
import LanguageSelector from './LanguageSelector';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { itemCount, setIsOpen: setCartOpen } = useCart();
  const location = useLocation();

  const navItems = [
    { to: '/apartments', label: t('nav.apartments') },
    { to: '/camping', label: t('nav.camping') },
    { to: '/cafe', label: t('nav.cafe') },
    { to: '/products', label: t('nav.products') },
    { to: '/parcels', label: t('nav.parcels') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      <nav className="bg-black fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                to="/"
                className="flex items-center py-2"
              >
                <img 
                  src={logo} 
                  alt="RIF LAND Logo" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8 rtl:space-x-reverse">
              <div className="flex items-baseline space-x-8 rtl:space-x-reverse">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`relative py-2 text-sm font-medium ${
                        isActive ? 'text-primary' : 'text-white hover:text-primary'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 inset-x-0 h-0.5 bg-primary"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right side items */}
            <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
              <LanguageSelector />
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-white hover:text-primary"
                aria-label="Open cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile menu button and icons */}
            <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
              <LanguageSelector />
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-gray-400 hover:text-primary"
                aria-label="Open cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-400 hover:text-primary"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMenuOpen}
        navItems={navItems}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Navbar; 