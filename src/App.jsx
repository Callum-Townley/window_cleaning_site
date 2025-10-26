import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/home.jsx'
import Services from './Pages/Services.jsx'
import About from './Pages/about.jsx'
import Coverage from './Pages/coverage.jsx'
import Contact from './Pages/contact.jsx'
import Footer from './Components/Footer.jsx'
import MobileContact from './Components/MobileContact.jsx'

function App() {
  

  return (
    <div>
      <Navbar/>
      <div id="home" className="h-[65vh] md:h-auto overflow-x-visible ">
        <Home/>
      </div>
      <div className=" flex sm:hidden">
        <MobileContact/>
      </div>
      <div id="services" className="overflow-x-visible ">
        <Services/>
      </div>
      <div id="about-us" className="overflow-x-visible ">
       <About/>
      </div>
      <div id="coverage" className="overflow-x-visible ">
        <Coverage/>
      </div>
      <div id="contact" className="overflow-x-visible ">
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
