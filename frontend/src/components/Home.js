import React from 'react'
import Header from './Header'
import Categories from './Categories'
import Welcome from './Welcome'
import BannerCommend from './BannerCommend'
import Qualite from './Qualite'
import Destination from './Destination'
import Blog from './Blog'


const Home = () => {
  return (
    <div>
    <Header/>
     <Categories/>
     <Welcome/>
     <BannerCommend/>
     <Qualite/>
     <Destination/>
     <Blog/>
    </div>
  )
}

export default Home
