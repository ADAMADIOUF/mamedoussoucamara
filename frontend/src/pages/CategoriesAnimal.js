import React from 'react'

const CategoriesAnimal = ({ filterItems, categories, activeCategory }) => {
  return (
    <div className='categories-animal'>
      <h3>Categories</h3>
      <div className='btn-categories-animal'>
        {categories.map((category, index) => (
          <button
            type='button'
            className={`filter-btn ${
              activeCategory === category ? 'active' : ''
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoriesAnimal
