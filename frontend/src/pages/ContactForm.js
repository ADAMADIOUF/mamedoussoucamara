import React, { useState} from 'react'
import { useSendContactFormMutation } from '../slices/contactApiSlice'

const ContactForm = () => {
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
    <div className='contact-container'>
      {!isFormSubmitted && (
        <form onSubmit={handleSubmit} className='contact-form'>
          <h2>Billing details</h2>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name:</label>
            <input
              type='text'
              id='firstName'
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name:</label>
            <input
              type='text'
              id='lastName'
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phoneNumber'>Phone Number:</label>
            <input
              type='tel'
              id='phoneNumber'
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='address'>Address:</label>
            <textarea
              id='address'
              rows='3'
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description:</label>
            <textarea
              id='description'
              rows='3'
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          
          <button type='submit' className='btn-submit' disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
          {isError && (
            <div className='error-message'>
              An error occurred while submitting the form. Please try again.
            </div>
          )}
        </form>
      )}
      {isFormSubmitted && !isError && (
        <div className='success-message'>
          Message sent successfully! We will respond to you soon.
        </div>
      )}
    </div>
  )
}

export default ContactForm
