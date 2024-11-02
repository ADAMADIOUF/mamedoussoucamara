import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import h1 from '../assets/headerbg3.png'
import h2 from '../assets/animalbg.png'
import products from '../products'
import CategoriesAnimal from './CategoriesAnimal'
import ProductsAnimal from './ProductsAnimal'

const allCategories = [...new Set(products.map((product) => product.category))]

const AnimalOne = () => {
  const [categories] = useState(allCategories)
  const [productItems, setProductItems] = useState([])
  const [activeCategory, setActiveCategory] = useState(allCategories[0])

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
        image='https://i.pinimg.com/564x/c6/73/f3/c673f391be93b891c08dfb9d71933001.jpg'
        title='poules-pondeuses'
      />

      <div className='animal-details'>
        <div className='title'>
          <h3>Poules pondeuses</h3>
          <p>
            Les poules pondeuses jouent un rôle essentiel dans l'aviculture, en
            fournissant des œufs frais et nutritifs qui font partie intégrante
            de l'alimentation quotidienne. Connu pour leur productivité, ces
            oiseaux sont spécialement sélectionnés et élevés pour leur capacité
            à pondre un grand nombre d'œufs. Les races de poules pondeuses,
            telles que la Lohmann Brown et la Rhode Island Red, sont appréciées
            pour leur santé robuste et leur adaptabilité à différents
            environnements. En plus de leur capacité à produire des œufs, les
            poules pondeuses sont également de bons compagnons pour les
            éleveurs, apportant une touche de vie et de couleur aux fermes et
            aux jardins.
          </p>
          <p>
            L'élevage de poules pondeuses nécessite des soins appropriés et un
            environnement adapté pour garantir leur bien-être et leur
            performance optimale. Cela inclut un poulailler propre et sûr, un
            accès à une alimentation équilibrée et des soins vétérinaires
            réguliers. Les poules pondeuses bénéficient également de l'exercice,
            qui peut être facilité par un parcours extérieur où elles peuvent
            picorer et se déplacer librement. Les éleveurs doivent veiller à
            leur santé en surveillant les signes de maladies courantes et en
            leur fournissant un habitat confortable. Une attention particulière
            à leurs besoins peut augmenter la production d'œufs et assurer des
            animaux heureux et en bonne santé.
          </p>
          <p>
            Enfin, la popularité des poules pondeuses ne se limite pas seulement
            à leur capacité à produire des œufs. De plus en plus de personnes
            choisissent d'élever des poules pondeuses dans leurs jardins en tant
            que solution durable pour obtenir des œufs frais. Ce mouvement vers
            l'autosuffisance alimentaire favorise également une prise de
            conscience accrue des pratiques d'élevage responsables et du
            bien-être animal. Élever des poules pondeuses contribue non
            seulement à réduire l'empreinte carbone liée à la production
            industrielle d'œufs, mais cela permet également aux éleveurs de
            profiter d'une source de protéines nutritives tout en établissant un
            lien avec la nature et en apprenant davantage sur la gestion des
            animaux.
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

export default AnimalOne
