import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from './components/TopNav'
import Navbar from './components/Navbar'
import Footeer from './components/Footeer'
import ClikButtonTop from './components/ClikButtonTop'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <TopNav />
      <Navbar />

      <Outlet />
      <ClikButtonTop />
      <ScrollToTop />
      <Footeer />
    </div>
  )
}

export default App
