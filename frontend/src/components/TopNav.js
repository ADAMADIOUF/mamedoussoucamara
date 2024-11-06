import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <div className='top-nav'>
      <h5>
        Réservez vos volailles directement sur notre site et récupérez-les dans
        nos points de collecte :
      </h5>

      <Link to={'/points-distribution'}>
        <h5>nos points de collecte</h5>
      </Link>
    </div>
  )
}

export default TopNav
