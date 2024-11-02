import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import h1 from '../assets/headerbg3.png'
import h2 from '../assets/animalbg.png'
import products from '../products'
import CategoriesAnimal from './CategoriesAnimal'
import ProductsAnimal from './ProductsAnimal'

const allCategories = [...new Set(products.map((product) => product.category))]

const AnimalThree = () => {
  const [categories] = useState(allCategories)
  const [productItems, setProductItems] = useState([])
  const [activeCategory, setActiveCategory] = useState(allCategories[2]) 

  useEffect(() => {
    filterItems(activeCategory)
  }, [activeCategory])

  const filterItems = (category) => {
    setActiveCategory(category)
    const filteredItems = products.filter((item) => item.category === category)
    setProductItems(filteredItems)
  }

  return (
    <div className='animal section-center'>
      <Hero
        image='https://i.pinimg.com/236x/0c/46/06/0c46063c6ed2b505a8af5a1eddff066e.jpg'
        title='volailles-festives'
      />

      <div className='animal-details'>
        <div className='title'>
          <h3>volailles festives</h3>
          <p>
            Les volailles festives occupent une place importante dans les
            traditions culinaires de nombreuses cultures, notamment lors des
            célébrations et des repas de fête. Qu'il s'agisse de dinde, de
            canard, de pintade ou de chapon, ces oiseaux sont souvent choisis
            pour leurs saveurs riches et leurs textures tendres. Leur
            préparation varie d'une région à l'autre, allant des recettes rôties
            aux plats en sauce, offrant une multitude de possibilités pour
            régaler les convives pendant les grandes occasions. Ces volailles
            sont non seulement savoureuses, mais elles symbolisent également
            l'abondance et la convivialité, réunissant familles et amis autour
            de la table.
          </p>
          <p>
            La sélection des volailles pour les repas festifs repose sur des
            critères de qualité rigoureux. Il est essentiel de choisir des
            oiseaux élevés dans de bonnes conditions, avec une alimentation
            saine et équilibrée, pour garantir une viande de premier choix. Les
            volailles festives sont souvent élevées en plein air, ce qui
            contribue à leur saveur unique et à leur texture délicate. De plus,
            la période de l'année influence également la disponibilité et le
            choix des volailles, avec des fêtes comme Noël et Pâques mettant en
            avant des espèces spécifiques.
          </p>
          <p>
            La préparation des volailles festives est un art en soi, nécessitant
            attention et savoir-faire. Des marinades aux garnitures, chaque
            détail compte pour sublimer le goût de la viande. Les chefs et les
            cuisiniers amateurs s'emploient à créer des plats mémorables qui
            émerveilleront les papilles de leurs invités. En plus des recettes
            traditionnelles, de nombreuses innovations culinaires permettent
            d'explorer de nouvelles saveurs et techniques de cuisson. Que ce
            soit pour un repas de fête en famille ou un dîner entre amis, les
            volailles festives sont un choix idéal pour célébrer les moments
            spéciaux et créer des souvenirs inoubliables autour de la table.
          </p>
        </div>
        <div className='header-bg-one'>
          <img src={h1} alt='' />
        </div>
        <div className='product-categories-container'>
          <CategoriesAnimal
            filterItems={filterItems}
            categories={categories}
            activeCategory={activeCategory}
          />
          <ProductsAnimal productItems={productItems} />
          <div className='header-bg-three'>
            <img src={h2} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimalThree
