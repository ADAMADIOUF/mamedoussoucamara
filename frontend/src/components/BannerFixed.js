import { Link } from "react-router-dom"

const BannerFixed = () => {
  return (
    <div className='banner-fixed'>
      <div className='banner-content'>
        <h1 className='banner-title'>Bienvenue à GIE MAME DOUSSOU</h1>
        <p className='banner-description'>
          Nous sommes spécialisés dans l'élevage de volaille de haute qualité,
          frais et biologique.
        </p>
        <Link to={'/qui-sommes-nous'}>
          <button className='btn slide-button'>En savoir plus</button>
        </Link>
      </div>
    </div>
  )
}

export default BannerFixed
