import React from 'react'

const Hero = ({ image, title }) => {
  return (
    <div className='hero' style={{ backgroundImage: `url(${image})` }}>
      <div className='hero-content'>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Hero
