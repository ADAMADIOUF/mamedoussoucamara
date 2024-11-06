import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import dataSlider from '../dataSlider' 
import h1 from "../assets/headerbg3.png"
import h2 from '../assets/headerbg2png.png'
import Animates from "./Animates"
const Header = () => {
  return (
    <div className='header'>
      <div className='container-slider'>
        <Swiper
          modules={[Autoplay]} 
          autoplay={{ delay: 3000 }} 
          className='mySwiper'
        >
          {dataSlider.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.image} alt={slide.text} />
              <div className='overlay'></div> 
              <h3 className='slide-text'>{slide.text}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Animates/>
      <div className='header-bg-one'>
        <img src={h1} alt='' />
      </div>
      <div className='header-bg-two'>
        <img src={h2} alt='' />
        <div className='headerbgtwo-text'>
          <span className='flag'> 🇸🇳</span>
          <h3>Découvrez l'Excellence des Poulets de Qualité Supérieure!Chez Mame Doussou Camara G I E </h3>
        </div>
      </div>
    </div>
  )
}

export default Header
