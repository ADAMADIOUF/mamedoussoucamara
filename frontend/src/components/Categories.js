import React from 'react'
import products from '../products'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleUp } from 'react-icons/fa'

const Categories = () => {
  return (
    <div className='categories section-center'>
      {products.slice(0,3).map((product)=>{
       const{id,image,title}=product
       return (
         <div className='categories-details' key={id}>
           <div className='categories-img'>
             <img src={image} alt='' />
           </div>
           <h3>{title}</h3>
           <button className='btn-categories'>
             decouvrir
             <span>
               <FaArrowAltCircleRight />
             </span>
           </button>
         </div>
       )
      })}
    </div>
  )
}

export default Categories
