import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom' // Import Link from react-router-dom
import navbarData from '../datanav'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubMenu, setActiveSubMenu] = useState(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setActiveSubMenu(null)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setActiveSubMenu(null)
  }

  const toggleSubMenu = (menuId) => {
    setActiveSubMenu(activeSubMenu === menuId ? null : menuId)
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          G I E MAME DOUSSOU
        </Link>

        <div className='mobile-menu-icon' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navbarData.map((item) => (
            <li key={item.id} className='navbar-item'>
              <Link
                to={
                  item.title === 'Accueil'
                    ? '/'
                    : item.categories.length > 1
                    ? '#'
                    : item.categories[0].link
                }
                className='navbar-link'
                onClick={() => {
                  if (item.title === 'Accueil') {
                    closeMobileMenu() // Close menu if Accueil is clicked
                  } else if (item.categories.length > 1) {
                    toggleSubMenu(item.id) // Toggle submenu if it has multiple categories
                  }
                }}
              >
                {item.title}
              </Link>

              {item.categories.length > 1 && activeSubMenu === item.id && (
                <ul className='dropdown-menu'>
                  {item.categories.map((category) => (
                    <li key={category.id} className='dropdown-item'>
                      <Link
                        to={category.link}
                        className='dropdown-link'
                        onClick={closeMobileMenu}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {item.categories.length > 1 && activeSubMenu === item.id && (
                <button
                  className='back-button'
                  onClick={() => setActiveSubMenu(null)}
                >
                  Retour
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
