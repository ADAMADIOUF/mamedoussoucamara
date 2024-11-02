import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import h1 from '../assets/headerbg3.png'
import h2 from '../assets/animalbg.png'
import products from '../products'
import CategoriesAnimal from './CategoriesAnimal'
import ProductsAnimal from './ProductsAnimal'

const allCategories = [...new Set(products.map((product) => product.category))]

const AnimalTwo = () => {
  const [categories] = useState(allCategories)
  const [productItems, setProductItems] = useState([])
  const [activeCategory, setActiveCategory] = useState(allCategories[1]) // Set to the second category by default

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
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLSLCamPL658uRZdlue3C4p0qgXLTy-DhFs8LGjy6R04k5tVnMo7PKdq2TbshN-xe50k&usqp=CAU'
        title='Poulets & pintades'
      />

      <div className='animal-details'>
        <div className='title'>
          <h3>Poulets & pintades</h3>
          <p>
            Élever des poulets et des pintades offre une expérience
            enrichissante, que ce soit pour les petits éleveurs ou pour les
            amateurs de jardinage. Les poulets sont très appréciés pour leur
            adaptabilité, fournissant une source régulière d'œufs frais, de
            viande et de fumier. Ils sont relativement faciles à entretenir et
            peuvent prospérer dans divers environnements, à condition d'avoir un
            poulailler sécurisé et suffisamment d’espace pour se déplacer. Les
            pintades, quant à elles, sont prisées pour la saveur de leur viande
            et leurs capacités naturelles de contrôle des parasites. Ensemble,
            les poulets et les pintades contribuent à une ferme avicole
            dynamique et productive.
          </p>
          <p>
            L'une des particularités des pintades est leur capacité
            exceptionnelle à chercher leur nourriture. Contrairement aux
            poulets, qui nécessitent souvent un complément alimentaire pour
            répondre à leurs besoins nutritionnels, les pintades sont
            extrêmement efficaces pour trouver leur propre nourriture, se
            nourrissant principalement d'insectes, de graines et de petits
            animaux au sol. Cet instinct naturel en fait d'excellentes alliées
            pour lutter contre les parasites, notamment les tiques, qui peuvent
            être un problème dans certaines régions. Cela permet non seulement
            de réduire les coûts d'alimentation, mais aussi de maintenir un
            environnement de ferme plus sain et plus équilibré.
          </p>
          <p>
            La viande de pintade est souvent décrite comme étant plus maigre et
            plus savoureuse que celle du poulet. C’est un mets de choix dans de
            nombreuses cuisines, notamment africaines, françaises et
            méditerranéennes. La viande de pintade contient plus de protéines et
            moins de gras que celle du poulet, ce qui en fait un choix attrayant
            pour les consommateurs soucieux de leur santé. Le poulet, cependant,
            est extrêmement polyvalent et est apprécié dans le monde entier, que
            ce soit dans des soupes réconfortantes ou des rôtis classiques.
            Avoir ces deux types de volailles sur une ferme permet de varier les
            produits et d’attirer un plus large éventail de consommateurs.
          </p>
        </div>
        <div className='header-bg-one'>
          <img
            src={h1}
            alt=''
          />
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

export default AnimalTwo
