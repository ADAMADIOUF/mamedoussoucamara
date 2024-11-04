import React from 'react'

const HeroVideo = ({ videoSrc, title }) => {
  return (
    <div className='hero-video'>
      <video
        autoPlay
        loop
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={videoSrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='hero-content'>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default HeroVideo
