import React from 'react'
import { Link } from 'react-router-dom'
import products from '../products'
const Qualite = () => {
  return (
    <div className='qualite section-center'>
      <h2>Nos Produits de Qualité</h2> 
      <div className='qualites-container'>
        {products.slice(0, 3).map((product) => {
          const { title, id, description, image } = product
          return (
            <div className='qualites-details' key={id}>
              <img src={image} alt='' />
              <h3>{title}</h3>
              <p>{description}</p>
              <Link to={`/product/${product.id}`}>
                <button>view product</button>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Qualite
