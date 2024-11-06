import React from 'react'
import { Link } from 'react-router-dom'
import blogPosts from '../dataBlog'

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
            <Link to={`/productTwo/${post.id}`}>
              <button className='read-more-btn'>Lire la suite</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
