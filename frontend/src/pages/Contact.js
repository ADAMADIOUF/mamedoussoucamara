import React, { useState } from 'react'
import h1 from '../assets/headerbg3.png'
import h2 from '../assets/animalbg.png'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useSendContactFormMutation } from '../slices/contactApiSlice'
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    description: '',
    address: '',
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [sendContactForm, { isLoading, isError }] = useSendContactFormMutation()
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let emailContent = `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Phone Number: ${formData.phone}
        Address: ${formData.address}
        Description: ${formData.description}`
      setIsFormSubmitted(true)
      await sendContactForm({
        ...formData,
        message: emailContent,
      })

      setFormData({
        firstName: '',
        lastName: '',
        subject: '',
        phone: '',
        description: '',
        address: '',
      })
    } catch (error) {
      console.error('An error occurred while submitting the form:', error)
    }
  }

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
              <span>giemamedoussoucamara@gmail.com</span>
            </div>
            {!isFormSubmitted && (
              <form onSubmit={handleSubmit} className='contact-form'>
                <div>
                  <input
                    placeholder='Nom *'
                    type='text'
                    id='firstName'
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder='Prenom *'
                    type='text'
                    id='lastName'
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <input type='email' placeholder='Adresse mail *' />
                </div>
                <div>
                  <input
                    placeholder='Téléphone *'
                    type='tel'
                    id='phoneNumber'
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <input
                    type='text'
                    placeholder='Adresse *'
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <h3>Votre message</h3>
                  <textarea
                    placeholder='Écrivez votre message ici'
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='btn-submit'
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
                {isError && (
                  <div className='error-message'>
                    An error occurred while submitting the form. Please try
                    again.
                  </div>
                )}
              </form>
            )}
            {isFormSubmitted && !isError && (
              <div className='success-message'>
                Message envoyé avec succès ! Nous vous répondrons bientôt.
              </div>
            )}
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
      </div>
      <div className='header-bg-one'>
        <img src={h1} alt='Header Background 1' />
      </div>
    </div>
  )
}

export default Contact
