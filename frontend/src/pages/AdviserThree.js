import React, { useEffect, useState } from 'react'
import dataAdviser from '../dataAdviser'
import Hero from '../components/Hero'
import AdviserProduct from './AdviserProduct'
import AdviserCategories from './AdviserCategories'
import h1 from '../assets/headerbg3.png'
import h2 from '../assets/animalbg.png'
const allCategories = [
  ...new Set(dataAdviser.map((product) => product.category)),
]
const AdvirserThree = () => {
  const [categories] = useState(allCategories)
  const [productItems, setProductItems] = useState([])
  const [activeCategory, setActiveCategory] = useState(allCategories[18])

  useEffect(() => {
    filterItems(activeCategory)
  }, [activeCategory])

  const filterItems = (category) => {
    setActiveCategory(category)
    const filteredItems = dataAdviser.filter(
      (item) => item.category === category
    )
    setProductItems(filteredItems)
  }
  return (
    <div className='adiviser-one section-center'>
      <Hero
        image='https://i.pinimg.com/236x/c3/a5/1c/c3a51cff5ac4edad8ce1f4a217f884b8.jpg'
        title='conseils volailles festives'
      />
      <div className='product-tile'>
        {productItems.map((product) => {
          return <h3 key={product.id}>{product.title}</h3>
        })}
      </div>
      <div className='adiviser-container'>
        <div className='advirserOne'>
          <AdviserCategories
            filterItems={filterItems}
            categories={categories}
            activeCategory={activeCategory}
          />
        </div>
        <div className='adiviserTwo'>
          <AdviserProduct productItems={productItems} />
        </div>
      </div>
      <div className='header-bg-one'>
        <img src={h1} alt='' />
      </div>
      <div className='header-bg-three'>
        <img src={h2} alt='' />
      </div>
    </div>
  )
}

export default AdvirserThree
