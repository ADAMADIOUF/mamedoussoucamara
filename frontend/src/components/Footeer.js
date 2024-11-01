import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footeer = () => {
  return (
    <div className='footer'>
      <div className='footer-overlay'></div>
      <div className='footer-center section-center footer-content'>
        <div className='footer-section'>
          <h4>Contactez-Nous</h4>
          <p>Senegal,Dakar, Tivaoune Peulh</p>
          <p>Email : mamebiramediouf@gmail.com</p>
          <p>Téléphone : (+221) 77-706-25-56</p>
        </div>

      
        <div className='footer-section'>
          <h4>Liens Rapides</h4>
          <Link to='/'>Accueil</Link>
          <Link to='/about'>À Propos</Link>
          <Link to='/services'>Services</Link>
          <Link to='/contact'>Contact</Link>
        </div>

       
        <div className='footer-section'>
          <h4>Suivez-Nous</h4>
          <div className='footer-social-icons'>
            <a href='#' aria-label='Facebook'>
              <span>
               <FaFacebook/>
              </span>
            </a>
            <a href='#' aria-label='Twitter'>
             <span>
              <FaTwitter/>
             </span>
            </a>
            <a href='#' aria-label='Instagram'>
              <span>
               <FaInstagram/>
              </span>
            </a>
          </div>
        </div>
      </div>

   
      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} Doussou Inc. Tous droits réservés. |{' '}
          <Link to='/privacy'>Politique de Confidentialité</Link>
        </p>
      </div>
    </div>
  )
}

export default Footeer
