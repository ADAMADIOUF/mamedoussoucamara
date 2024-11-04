import React from 'react'
import Hero from '../components/Hero'

const Pro = () => {
  return (
    <div className='pro section-center'>
      <Hero
        image='https://i.pinimg.com/236x/a1/47/da/a147dafa985a0dc65e825f1858e5de89.jpg'
        title="Nos Services d'Élevage de Volaille"
      />
      <h2>Nos Services d'Élevage de Volaille</h2> 
      <p className='pro-description'>
        Découvrez notre large gamme de services d'élevage de volaille, où
        qualité et bien-être des animaux sont nos priorités.
      </p>
      <div className='pro-container'>
        <article className='pro-item'>
          <h3>Élevage de Poulets</h3>
          <p>
            Nous élevons des poulets en utilisant des méthodes écologiques pour
            garantir des produits de haute qualité, savoureux et sains.
          </p>
        </article>
        <article className='pro-item'>
          <h3>Élevage de Pigeons</h3>
          <p>
            Notre élevage de pigeons est basé sur des pratiques traditionnelles,
            offrant des oiseaux en bonne santé et bien entretenus.
          </p>
        </article>
        <article className='pro-item'>
          <h3>Élevage de Pintades</h3>
          <p>
            Nous nous spécialisons dans l'élevage de pintades, réputées pour
            leur goût unique et leur valeur nutritionnelle élevée.
          </p>
        </article>
        <article className='pro-item'>
          <h3>Élevage de Lapins</h3>
          <p>
            Nos lapins sont élevés dans un environnement sain, garantissant leur
            bien-être et une viande de qualité supérieure.
          </p>
        </article>
        <article className='pro-item'>
          <h3>Élevage de Dindes</h3>
          <p>
            Nous proposons des dindes élevées naturellement, parfaites pour vos
            repas de fête et vos occasions spéciales.
          </p>
        </article>
        <article className='pro-item'>
          <h3>Élevage de Canards</h3>
          <p>
            Nos canards sont élevés dans des conditions optimales, fournissant
            une viande délicieuse et des œufs savoureux.
          </p>
        </article>
        <article className='pro-item'>
          <h3>Élevage de Oies</h3>
          <p>
            Nous élevons des oies en suivant des méthodes durables, pour
            garantir des produits de qualité tout en respectant l'environnement.
          </p>
        </article>
        <article className='pro-item'>
          <h3>Élevage de Cailles</h3>
          <p>
            Nos cailles sont élevées avec soin, fournissant des œufs et une
            viande de haute qualité, appréciés par les gourmets.
          </p>
        </article>
      </div>
    </div>
  )
}

export default Pro
