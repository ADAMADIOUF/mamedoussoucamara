import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <div className='top-nav'>
      <h5>
        NOUVEAU ! Réservez vos volailles directement sur notre site et
        récupérez-les dans nos points de collecte : canards, poulets, dindes et
        bien plus encore !
      </h5>

      <Link to={'/'}>
        <h5>nos points de collecte</h5>
      </Link>
    </div>
  )
}

export default TopNav
