import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'

const SingleProduct = () => {
  const { id: productId } = useParams()
  const product = products.find((product) => product.id === parseInt(productId))

  if (!product) {
    return <h2>Product not found</h2>
  }

  return (
    <div className='single-product'>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Age: {product.age}</p>
      <p>Weight: {product.weight}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>

      {/* Contact Information */}
      <div className='contact-info'>
        <h3>Contact Information</h3>
        <p>
          Phone: <a href='tel:+221777062556'>+221 77 706 25 56</a>
        </p>
      </div>

      {/* Map */}
      <div className='map'>
        <h3>Location</h3>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.4647379126715!2d-17.342572!3d14.7622088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1a07d4a8b4c7b%3A0xf74f24b5ecf9d055!2sTivaouane%20Peulh!5e0!3m2!1sen!2ssn!4v1695064696019!5m2!1sen!2ssn'
          width='100%'
          height='300'
          style={{ border: '0' }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Tivaouane Peulh Location'
        ></iframe>
      </div>
    </div>
  )
}

export default SingleProduct
