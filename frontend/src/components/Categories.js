import React from 'react'
import products from '../categorieProducts'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories section-center'>
      {products.slice(0, 3).map((product) => {
        const { id, image, title, link } = product
        return (
          <div className='categories-details' key={id}>
            <div className='categories-img'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='details-link-categories'>
              <Link to={link} className='btn-categories'>
                découvrir
              </Link>
              <span>
                <FaArrowAltCircleRight />
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Categories
