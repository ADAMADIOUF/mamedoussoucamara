import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const History = () => {
  const historyData = [
    {
      year: 2000,
      title: 'Nos Débuts',
      description:
        'Nous avons commencé notre voyage avec la vision de fournir le meilleur service dans l’industrie.',
    },
    {
      year: 2010,
      title: "Phase d'Expansion",
      description:
        'Nous avons étendu notre portée à de nouvelles villes et augmenté considérablement notre base de clients.',
    },
    {
      year: 2020,
      title: 'Reconnaissance Internationale',
      description:
        'Notre marque a gagné une reconnaissance mondiale et est devenue un leader du marché.',
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Activer les flèches pour la navigation suivante et précédente
  }

  return (
    <section className='history-section'>
      <div className='history-background'>
        <h1>Comment Nous Avons Atteint le Succès</h1>
        <p>Notre Histoire</p>
        <Slider {...settings}>
          {historyData.map((item, index) => (
            <div key={index} className='history-card'>
              <div className='history-card-content'>
                <h3>{item.year}</h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default History
