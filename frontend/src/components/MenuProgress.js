import { useState } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  {
    id: 1,
    title: 'À Propos',
    description:
      'Nous sommes GIE MAME DOUSSOU, dédiés à l’élevage de volaille de haute qualité.',
  },
  {
    id: 2,
    title: 'Notre Mission',
    description:
      'Notre mission est de fournir des produits avicoles frais et sains à nos clients.',
  },
  {
    id: 3,
    title: 'Notre Vision',
    description:
      'Nous visons à être un fournisseur leader de solutions d’élevage de volaille biologiques et durables.',
  },
]

const MenuProgress = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='menu-progress'>
      {/* Section Titre */}
      <div className='title-menuprogress'>
        <h3>Fondé en 1999</h3>
        <h2>Notre Ferme</h2>
        <h1>Qui Nous Sommes</h1>
      </div>

      {/* Barre de Progression - Navigation */}
      <div className='progress-bar'>
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className={`menu-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* Section Description */}
      <div className='description'>
        <p>{menuItems[activeIndex].description}</p>
      </div>

      <Link to={'/qui-sommes-nous'}>
        <button className='btn slide-button'>Lire Plus</button>
      </Link>
    </div>
  )
}

export default MenuProgress
