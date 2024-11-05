import React from 'react'
import h1 from '../assets/headerbg3.png'
import h2 from '../assets/animalbg.png'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='contact section-center'>
      <div className='contact-details'>
        <div className='contact-container'>
          <article className='contact-form'>
            <div className='title'>
              <h3>Nous contacter :</h3>
            </div>
            <div className='contact-email'>
              <span>
                <MdOutlineMarkEmailRead />
              </span>
              <h3>Par e-mail</h3>
            </div>
            <form className='contact-form'>
              <div>
                <input type='text' placeholder='Nom *' />
              </div>
              <div>
                <input type='text' placeholder='Prenom *' />
              </div>
              <div>
                <input type='email' placeholder='Adresse mail *' />
              </div>
              <div>
                <input type='tel' placeholder='Téléphone *' />
              </div>
              <div>
                <input type='text' placeholder='Adresse *' />
              </div>
              <div>
                <h3>Votre message</h3>
                <textarea placeholder='Écrivez votre message ici'></textarea>
              </div>
              <button type='submit'>Validez</button>
            </form>
          </article>
          <article className='map-contact'>
            <MapContainer
              center={[14.6928, -17.4467]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[14.6928, -17.4467]}>
                <Popup>Nous sommes ici !</Popup>
              </Marker>
            </MapContainer>
          </article>
        </div>
        <ContactForm/>
      </div>
      <div className='header-bg-one'>
        <img src={h1} alt='Header Background 1' />
      </div>
      <div className='header-bg-three'>
        <img src={h2} alt='Header Background 2' />
      </div>
    </div>
  )
}

export default Contact
