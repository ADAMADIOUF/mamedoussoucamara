import React, { useState } from 'react'
import products from '../products' // Assuming your products are in a 'products' file

const categories = [
  'All',
  'poules-pondeuses',
  'poulets-pintades',
  'volailles-festives',
  'Autre Volaille',
]

const Shop = () => {
  // Create state for selected category
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className='shop'>
      <h2>Our Products</h2>

      {/* Category Filter */}
      <div className='category-filter'>
        <label htmlFor='category'>Filter by Category: </label>
        <select
          id='category'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <div className='product-list'>
        {filteredProducts.map((product) => (
          <div key={product.id} className='product-card'>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>
              <strong>Age:</strong> {product.age}
            </p>
            <p>
              <strong>Weight:</strong> {product.weight}
            </p>
            <p>
              <strong>Price:</strong> {product.price} CFA
            </p>
            <a
              href='https://wa.me/221706791005'
              target='_blank'
              rel='noopener noreferrer'
              className='whatsapp-button'
            >
              Acheter sur WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
