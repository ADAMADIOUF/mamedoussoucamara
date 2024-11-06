import React from 'react'
import blogPosts from '../dataBlog'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
  const { id: productId } = useParams()
  const post = blogPosts.find((post) => post.id === parseInt(productId))

  if (!post) {
    return <h2>Blog post not found</h2>
  }

  return (
    <div className='single-blog'>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} className='blog-image' />
      <div className='blog-details'>
        <p>
          <strong>Author:</strong> {post.author}
        </p>
        <p>
          <strong>Date:</strong> {post.date}
        </p>
        <p>
          <strong>Read Time:</strong> {post.readTime}
        </p>
        <p>
          <strong>Likes:</strong> {post.likes}
        </p>
        <p>
          <strong>Comments:</strong> {post.comments}
        </p>
      </div>
      <p className='blog-content'>{post.content}</p>
      <div className='blog-tags'>
        <strong>Tags:</strong>{' '}
        {post.tags.map((tag, index) => (
          <span key={index} className='tag'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SingleBlog
