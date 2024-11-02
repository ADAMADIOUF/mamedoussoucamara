import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa' // Importing the arrow icon from react-icons

const ClikButtonTop = () => {
  const [showButton, setShowButton] = useState(false)

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    })
  }

  // Function to handle scroll event and show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      // Adjust this value based on when you want the button to appear
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  // useEffect to add/remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {showButton && (
        <button className='scroll-to-top' onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  )
}

export default ClikButtonTop
