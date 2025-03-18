import { useState } from 'react'

const images = [
  'https://i.pinimg.com/736x/16/ac/3d/16ac3d84218f744ba8997b490f7a9142.jpg',
  'https://i.pinimg.com/736x/38/a4/3e/38a43e71f49e95f0530079d3f4bb36ea.jpg',
  'https://i.pinimg.com/736x/07/5d/66/075d6620618c50d2c8ff509c62560261.jpg',
  'https://i.pinimg.com/736x/be/ea/4c/beea4cc1b540cce3a6ee4211691d8849.jpg',
]

const BannerSlider = () => {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className='banner-slider'>
      {/* Main Image */}
      <div className='main-image'>
        <img src={mainImage} alt='Main' />
      </div>

      {/* Thumbnail Images */}
      <div className='thumbnail-container'>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={mainImage === img ? 'active' : ''}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  )
}

export default BannerSlider
