import { FaLeaf, FaBox, FaRecycle, FaSmile } from 'react-icons/fa'

const bannerItems = [
  {
    id: 1,
    title: 'Farming de qualité',
    description:
      "Nous assurons les normes les plus élevées en matière d'élevage de volaille.",
    icon: <FaLeaf className='icon' />,
  },
  {
    id: 2,
    title: 'Produits frais',
    description: 'Nos produits de volaille sont toujours frais et biologiques.',
    icon: <FaBox className='icon' />,
  },
  {
    id: 3,
    title: 'Pratiques durables',
    description:
      'Nous utilisons des techniques agricoles écologiques et durables.',
    icon: <FaRecycle className='icon' />,
  },
  {
    id: 4,
    title: 'Satisfaction client',
    description:
      'Notre objectif est de fournir le meilleur service de qualité à nos clients.',
    icon: <FaSmile className='icon' />,
  },
]

const BannerNumber = () => {
  return (
    <div className='banner-number section-center'>
      {bannerItems.map((item) => (
        <div key={item.id} className='number-item'>
          <div className='number-circle'>
            {item.icon}
            <span className='number'>{item.id}</span>
          </div>
          <div className='content'>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BannerNumber
