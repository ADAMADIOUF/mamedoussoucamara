import React from 'react'
import {Link} from "react-router-dom"
import { IoEyeSharp } from 'react-icons/io5'
const ProductsAnimal = ({ productItems }) => {
  return (
    <div className='products-animals'>
      <div className='prouduct-animal'>
        {productItems.map((product) => {
          const { image, title } = product
          return (
            <div className='product-animal-details'>
              <img src={image} alt='' />
              <h3>{title}</h3>
              <Link to={'/'}>
                <div className='details-link'>
                  <span>
                    <IoEyeSharp />
                  </span>
                  <button className='btn-details'>Voir le details</button>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}
export default ProductsAnimal
