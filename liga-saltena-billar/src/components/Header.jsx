import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import './Header.css'

const Header = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  const isScrolled = scrollY > 50

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    {
      name: 'Institucional',
      href: '#institucional',
      submenu: [
        { name: 'Autoridades', href: '#autoridades' },
        { name: 'Comisión Fiscal', href: '#comision-fiscal' }
      ]
    },
    {
      name: 'Campeonatos',
      href: '#campeonatos',
      submenu: [
        { name: 'Campeonato Oficial LSB 2026', href: '#campeonato-oficial-lsb' },
        { name: 'Campeonato Oficial FUB', href: '#campeonato-federacion' },
        { name: 'Circuito Selectivo Salteño', href: '#circuito-selectivo' }
      ]
    },
    { name: 'Instituciones', href: '#instituciones' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setActiveSubmenu(null)
  }

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="logo-circle">
              <div className="logo-table">
                <div className="logo-balls">
                  <div className="ball ball-yellow"></div>
                  <div className="ball ball-white"></div>
                  <div className="ball ball-red"></div>
                </div>
                <div className="logo-pins">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="pin"></div>
                  ))}
                </div>
              </div>
              <span className="logo-text-top">Liga Salteña de Billar</span>
              <span className="logo-text-bottom">L.S. de B</span>
            </div>
            <h1 className="site-title">
              Liga Salteña de Billar
              <span>Sitio Oficial de la Liga Salteña de Billar</span>
            </h1>
          </motion.div>

          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index} className={item.submenu ? 'has-submenu' : ''}>
                  <a
                    href={item.href}
                    onClick={handleLinkClick}
                    onMouseEnter={() => item.submenu && setActiveSubmenu(index)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    {item.name}
                    {item.submenu && <FaChevronDown className="chevron" />}
                  </a>
                  {item.submenu && (
                    <AnimatePresence>
                      {(activeSubmenu === index || isMenuOpen) && (
                        <motion.ul
                          className="submenu"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a href={subItem.href} onClick={handleLinkClick}>
                                {subItem.name}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
