import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const temoignages = [
  {
    id: 1,
    text: 'J’adore votre viande/volaille et vos œufs – quel bonheur de pouvoir en profiter ! Je suis tellement enthousiaste à l’idée d’améliorer ma santé ! Merci encore !',
    name: 'Caroline Goodman',
    role: 'Client',
  },
  {
    id: 2,
    text: '“Waouh” est le mot que j’ai utilisé lorsque j’ai goûté votre poulet acheté dans un magasin local ici. Je pense que je vais devenir un client régulier.',
    name: 'Will McMillan',
    role: 'Client',
  },
  {
    id: 3,
    text: 'Merci beaucoup pour votre hospitalité lors de notre visite de la ferme la semaine dernière. Nous nous sommes sentis bien accueillis et avons acheté deux douzaines de vos œufs.',
    name: 'Sam Wilson',
    role: 'Client',
  },
  {
    id: 4,
    text: 'Vos produits sont supérieurs à tout ce que j’ai essayé l’année dernière, et je serai client aussi longtemps que vous les produirez. Merci !',
    name: 'Jane Peterson',
    role: 'Client',
  },
]

const Temoignages = () => {
  const parametres = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Afficher 2 témoignages à la fois
    slidesToScroll: 2, // Faire défiler 2 témoignages à la fois
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Masquer les flèches, utiliser uniquement les points pour naviguer
  }

  return (
    <div className='testimonial-section'>
      <h1>Ce que disent nos clients</h1>
      <Slider {...parametres}>
        {temoignages.map((temoignage) => (
          <div key={temoignage.id} className='testimonial-card'>
            <p className='testimonial-text'>"{temoignage.text}"</p>
            <h3 className='testimonial-author'>{temoignage.name}</h3>
            <p className='testimonial-role'>{temoignage.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Temoignages
