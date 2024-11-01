import React from 'react'
import { Link } from 'react-router-dom'

const blogPosts = [
  {
    id: 1,
    title: 'Les Bienfaits du Poulet Fermier',
    excerpt:
      'Découvrez pourquoi le poulet fermier est un choix plus sain et savoureux pour votre famille.',
    image:
      'https://i.pinimg.com/236x/fd/c5/95/fdc595345747d0d632be1e34e7c07085.jpg',
    link: '/blog/les-bienfaits-du-poulet-fermier',
  },
  {
    id: 2,
    title: 'Techniques d’Élevage de Poulet Fermier',
    excerpt:
      'Apprenez les meilleures pratiques pour élever des poulets fermiers dans des conditions optimales.',
    image:
      'https://i.pinimg.com/236x/cf/81/5f/cf815fbbeb1c2a472d79524587e9f87d.jpg',
    link: '/blog/techniques-elevage-poulet-fermier',
  },
  {
    id: 3,
    title: 'Poulet Fermier vs Poulet Industriel : Ce Que Vous Devriez Savoir',
    excerpt:
      'Un comparatif entre le poulet fermier et le poulet industriel pour faire le bon choix.',
    image:
      'https://i.pinimg.com/236x/35/c9/6a/35c96a96235c94ad143cfb01d6554d4a.jpg',
    link: '/blog/poulet-fermier-vs-industriel',
  },
  // Add more blog posts as needed
]

const Blog = () => {
  return (
    <div className='blog-container section-center'>
      <h2>Blog sur l'Élevage de Poulet Fermier</h2>
      <p>
        Explorez nos articles pour en savoir plus sur les pratiques d’élevage,
        les bienfaits et les conseils autour du poulet fermier.
      </p>

      <div className='blog-posts'>
        {blogPosts.map((post) => (
          <div key={post.id} className='blog-post'>
            <img src={post.image} alt={post.title} className='blog-image' />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={post.link}>
              <button className='read-more-btn'>Lire la suite</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
