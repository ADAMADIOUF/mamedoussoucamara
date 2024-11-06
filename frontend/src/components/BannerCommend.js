import React from 'react'
import { FaCalendar, FaHome } from 'react-icons/fa'
import {Link} from "react-router-dom"
const BannerCommend = () => {
  return (
    <div className='banner-commend'>
      <div className='banner-commend-details'>
        <h3>Commandez vos poules</h3>
        <p>et venez les récupérer dans un de nos nombreux points de collecte</p>
        <div className='banner-command-btn-container'>
          <Link to={'/contact'}>
            <article className='first-btn'>
              <span>
                <FaCalendar />
              </span>
              <h5>commander</h5>
            </article>
          </Link>
          <Link to={'/points-distribution'}>
            <article className='last-btn'>
              <span>
                <FaHome />
              </span>
              <h5>Découvrir les points de collecte</h5>
            </article>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BannerCommend
