import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import navbarData from '../datanav'
import logo from '../assets/logo.png'
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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    })
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link
          to='/'
          className='navbar-logo'
          onClick={() => {
            closeMobileMenu()
            scrollToTop()
          }}
        >
          <img src={logo} alt='Logo' className='logo' />
        </Link>

        <div className='mobile-menu-icon' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navbarData.map((item) => (
            <li key={item.id} className='navbar-item no-wrap'>
              <Link
                to={
                  item.title === 'Accueil'
                    ? '/'
                    : item.categories.length > 1
                    ? '#' // Use '#' to indicate a dropdown
                    : item.categories[0].link
                }
                className='navbar-link'
                onClick={() => {
                  if (item.title === 'Accueil') {
                    closeMobileMenu() // Close menu if Accueil is clicked
                    scrollToTop() // Scroll to top for Accueil
                  } else if (item.categories.length > 1) {
                    toggleSubMenu(item.id) // Toggle the submenu
                  } else {
                    closeMobileMenu() // Close menu for other links as well
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
                        onClick={closeMobileMenu} // Close mobile menu on category click
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      
      </div>
    </nav>
  )
}

export default Navbar
