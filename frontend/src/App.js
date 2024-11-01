import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from './components/TopNav'
import Navbar from './components/Navbar'
import Footeer from './components/Footeer'
const App = () => {
  return (
    <div>
      <TopNav/>
      <Navbar/>
   <Outlet/>
   <Footeer/>
    </div>
  )
}

export default App
