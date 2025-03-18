import React from 'react'

const BlogHome = () => {
  const blogData = [
    {
      title: 'Les bienfaits des œufs frais de ferme que vous devez connaître',
      date: '9 août 2020',
      imageUrl:
        'https://i.pinimg.com/736x/13/a0/f1/13a0f192210ad2fb8ecda11e7e51bf3c.jpg',
    },
    {
      title: "5 choses que vous ne saviez pas sur l'élevage de poules",
      date: '9 août 2020',
      imageUrl:
        'https://i.pinimg.com/736x/6b/1d/da/6b1dda42d75f30f25d04ff377e701a2c.jpg',
    },
    {
      title: 'Comment améliorer la qualité de votre ferme de poules',
      date: '9 août 2020',
      imageUrl:
        'https://i.pinimg.com/736x/df/34/c4/df34c4173f516a40382d26434b16a496.jpg',
    },
  ]

  return (
    <section className='blog-home'>
      <h1>Dernières nouvelles</h1>
      <h2>Notre blog</h2>

      <div className='blog-posts'>
        {blogData.map((item, index) => (
          <div key={index} className='blog-post'>
            <img
              src={item.imageUrl}
              alt={`Article de blog ${index + 1}`}
              className='blog-image'
            />
            <h3>{item.title}</h3>
            <p className='post-date'>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogHome
