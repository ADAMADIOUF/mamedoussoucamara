import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const slides = [
  {
    id: 1,
    image:
      'https://i.pinimg.com/736x/b4/31/9d/b4319de982f1589cd995cf12bb5723d1.jpg',
    title: 'Bienvenue chez GIE MAME DOUSSOU CAMARA',
    description:
      'Découvrez nos volailles élevées avec soin : poulets de chair, canards et poulets wolof.',
    button: 'Voir Nos Produits',
    link: '/shop',
  },
  {
    id: 2,
    image:
      'https://i.pinimg.com/474x/20/76/81/207681d3b740b465fe29c1c932014f01.jpg',
    title: 'Qualité et Fraîcheur',
    description: 'Des volailles saines et fraîches, élevées avec passion.',
    button: 'Commander Maintenant',
    link: '/shop',
  },
  {
    id: 3,
    image:
      'https://i.pinimg.com/736x/5f/d3/74/5fd374a83bbb65d4e3eb3707049c3649.jpg',
    title: 'Nos Poulets de Chair',
    description: 'Une viande tendre et savoureuse pour tous vos repas.',
    button: 'Découvrir',
    link: '/shop',
  },
  {
    id: 4,
    image:
      'https://i.pinimg.com/736x/b3/7a/c6/b37ac608e3e41e99463e9ec417763345.jpg',
    title: 'Nos Canards',
    description: 'Une alternative délicieuse et nutritive pour vos plats.',
    button: 'Voir Plus',
    link: '/shop',
  },
  {
    id: 5,
    image:
      'https://i.pinimg.com/474x/3e/0e/27/3e0e27c644a937a7e40c2bb69d421510.jpg',
    title: 'Poulets Wolof',
    description: 'Une race locale prisée pour son goût authentique.',
    button: 'Commander',
    link: '/shop',
  },
  {
    id: 6,
    image:
      'https://i.pinimg.com/736x/ed/e4/e5/ede4e5ab3d8496dec24ef5ff4f78ebb9.jpg',
    title: 'Livraison Rapide',
    description: 'Recevez vos volailles fraîches directement chez vous.',
    button: 'Contactez-Nous',
    link: '/contact',
  },
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000) // 5 seconds autoplay
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='hero-slider'>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='slide-overlay'></div>
          <div className='slide-content'>
            <h2 className='slide-title'>{slide.title}</h2>
            <p className='slide-description'>{slide.description}</p>
            <a href={slide.link} className='slide-button'>
              {slide.button}
            </a>
          </div>
        </div>
      ))}

      {/* Prev & Next Buttons */}
      <button className='prev-button' onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      <button className='next-button' onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
  )
}

export default HeroSlider
