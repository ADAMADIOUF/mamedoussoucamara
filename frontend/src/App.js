import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from './components/TopNav'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <TopNav/>
      <Navbar/>
   <Outlet/>
    </div>
  )
}

export default App
