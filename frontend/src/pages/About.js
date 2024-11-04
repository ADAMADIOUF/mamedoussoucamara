import React from 'react'
import HeroVideo from '../components/HeroVideo'
import videoFile from '../assets/mamedou1.mp4'
import h1 from '../assets/headerbg3.png'
import h2 from '../assets/animalbg.png'
const About = () => {
  const title = 'Bienvenue G I E Mamedoussou Camara' // Define the title variable

  return (
    <div className='about'>
      <div className='about-section section-center'>
        <HeroVideo videoSrc={videoFile} title={title} />
        <div className='about-us'>
          <h3>Présentation de la société</h3>
        </div>
        <div className='about-container'>
          <article className='about-img'>
            <img
              src='https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/449715060_1609513749898715_22949665804406819_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=EhXo-4SueGEQ7kNvgE2oiOQ&_nc_zt=23&_nc_ht=scontent-msp1-1.xx&_nc_gid=An69ILXKIi-o2s7ukxhwBU_&oh=00_AYAgvLLU0HVk_Ra4vv6QKSWjerqyscRY3NDHqz1hgehwhw&oe=672EDCEB'
              alt='Un poulet élevé de manière écologique dans un environnement familial'
            />
          </article>
          <article className='about-details'>
            <h1>{title}</h1>
            <h3>L'histoire du G I E Mame Doussou</h3>
            <h5>Un savoir-faire artisanal familial</h5>
            <p>
              L'Élevage du poulet je l'ai hérité de ma grande-mère Mame Doussou
              Camara, qui était une Saint Louisienne greffée pieu, ce qui
              l'amenait à l'élevage du poulet. Parmi ses sujets, il y avait un
              grand coq qu'elle appelait Bocar; Bocar était un cousin de mon
              grand-père Baïdy. Mon père Semou faisait également l'élevage du
              poulet, ainsi que mon oncle Léonce Gueye de Saint-Louis. Donc,
              c'est un héritage. Pour obtenir de bonnes viandes de qualité, il
              faut se tourner vers l'élevage écologique. Cet engagement envers
              des pratiques durables et respectueuses de l'environnement est
              profondément enraciné dans notre histoire familiale. La passion
              pour l'élevage se transmet de génération en génération, et nous
              sommes fiers de perpétuer ce savoir-faire traditionnel tout en
              nous adaptant aux exigences modernes du marché.
            </p>
          </article>
        </div>
      </div>
      <div className='header-bg-one'>
        <img src={h1} alt='' />
      </div>
      <div className='header-bg-three'>
        <img src={h2} alt='' />
      </div>
    </div>
  )
}

export default About
