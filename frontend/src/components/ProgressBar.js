import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const ProgressBar = () => {
  const [count, setCount] = useState(false)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setCount(true)
    }, 2000)

    return () => {
      clearTimeout(loadingTimer)
    }
  }, [])

  return (
    <section className='progress-content'>
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <div className='progress-bar'>
          <article>
            <h3>
              {count && <CountUp start={0} end={500} duration={2} delay={0} />}
            </h3>
            <span>Magasins à travers le Sénégal</span>
            <div className={`progress bg1 ${count ? 'animate' : ''}`}></div>
          </article>
          <article>
            <h3>
              {count && <CountUp start={0} end={27} duration={2} delay={0} />}ha
            </h3>
            <span>La taille de notre ferme</span>
            <div className={`progress bg2 ${count ? 'animate' : ''}`}></div>
          </article>
          <article>
            <h3>
              {count && <CountUp start={0} end={350} duration={2} delay={0} />}
            </h3>
            <span>Membres qualifiés de l'équipe</span>
            <div className={`progress bg3 ${count ? 'animate' : ''}`}></div>
          </article>
        </div>
      </ScrollTrigger>
    </section>
  )
}

export default ProgressBar
