import React from 'react'
import { Link } from 'react-router-dom'
import d1 from "../assets/destination.png"
const Destination = () => {
  return (
    <div className='destination'>
      <div className='destination-details section-center'>
     
        <div className='container-destination'>
          <article className='destination-text'>
            <h3>Où Acheter ? </h3>
            <p>
              Les produits Mame Doussou sont largement disponibles à travers le
              Sénégal et au-delà. Vous pouvez trouver nos articles de volaille
              de haute qualité à divers endroits
            </p>
            <Link to={'/contact'}>
              <button className='btn'>contact</button>
            </Link>
          </article>
          <article className='destination-img'>
            <img
              src={d1}
              alt=''
            />
          </article>
        </div>
      </div>
    </div>
  )
}

export default Destination
