import React from 'react'

const AdviserCategories = ({ filterItems, categories, activeCategory }) => {
  return (
    <div className='adviser-catecories'>
      <div className='btn-categories-adviser'>
        {categories.map((category, index) => (
          <div key={index}>
            <button
              type='button'
              className={`filter-btn-adviser ${
                activeCategory === category ? 'active' : ''
              } ${index === 0 ? 'first-category' : ''}`} // Add class for the first category
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdviserCategories
