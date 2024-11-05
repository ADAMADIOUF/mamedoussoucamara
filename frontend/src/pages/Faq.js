import React from 'react'
import questionsData from '../dataQuestions'
import SingleQuestion from './SingleQuestion'
import Hero from '../components/Hero'
import h1 from '../assets/headerbg3.png'
import h2 from '../assets/animalbg.png'
const FAQ = () => {
  return (
   <>
    <div className='faq section-center'>
      <Hero
        image='https://i.pinimg.com/236x/81/5b/8c/815b8c1f6c37725868a819e6ae995125.jpg'
        title='Foire aux questions'
      />
      <div className='title'>
        <h3>Foire aux questions</h3>
      </div>
      {questionsData.map((category) => (
        <section key={category.category} className='category'>
          <h2>{category.category}</h2>
          {category.questions.map((question) => (
            <SingleQuestion
              key={question.id}
              title={question.title}
              info={question.info}
            />
          ))}
        </section>
      ))}
    </div>
    <div className='header-bg-one'>
        <img src={h1} alt='' />
      </div>
      <div className='header-bg-three'>
        <img src={h2} alt='' />
      </div>
      </>
  )
}

export default FAQ
