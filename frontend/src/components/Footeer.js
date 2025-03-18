import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-info'>
          <h3>Heures d'ouverture</h3>
          <ul>
            <li>
              <strong>En semaine :</strong> 08:00am - 08:00pm
            </li>
            <li>
              <strong>Week-ends :</strong> 10:00am - 06:00pm
            </li>
          </ul>
        </div>

        <div className='footer-social'>
          <h3>Réseaux sociaux</h3>

          <ul>
            <li>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className='footer-contacts'>
          <h3>Contacts</h3>
          <ul>
            <li>Senegal,Tivaoune Peulh,Cite Apix</li>
            <li>Senegal,Fatick,Noduck @</li>
            <li>+221 77 706 25 56</li>
            <li>+221 70 679 10 05</li>
            <li>
              <a href='mailto:info@demolink.org'>giemamedoussoucamara@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className='footer-newsletter'>
          <h3>Newsletter</h3>
          <p>
            Abonnez-vous à notre newsletter pour recevoir des nouvelles
            hebdomadaires, des mises à jour, des offres spéciales et des
            réductions exclusives.
          </p>
          <form>
            <input type='email' placeholder='Entrez votre e-mail' required />
            <button type='submit'>S'abonner</button>
          </form>
        </div>
      </div>

      {/* Section "G I E MAME DOUSSOU" */}
      <div className='giemame-doussou'>
        <p>G I E MAME DOUSSOU</p>
      </div>
    </footer>
  )
}

export default Footer
