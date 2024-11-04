import React from 'react'

const AdviserProduct = ({ productItems }) => {
  console.log(productItems)

  return (
    <div className='adviser-product'>
      {productItems.map((product) => {
        const { id, description, image, image2 } = product

        return (
          <div className='adviser-product-details' key={id}>
            <div className='paragraph'>
              {description.map((paragraph, index) => (
                <div
                  key={index}
                  style={{ display: 'flex', alignItems: 'flex-start' }}
                >
                  {/* Conditionally render the dot */}
                  {paragraph.hasDot && (
                    <span style={{ marginRight: '8px', fontWeight: 'bold' }}>
                      •
                    </span>
                  )}
                  {/* Render the paragraph text */}
                  <p dangerouslySetInnerHTML={{ __html: paragraph.text }} />
                </div>
              ))}
            </div>
            <div className='adviser-products-img'>
              <img src={image} alt='' />
              
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AdviserProduct
