import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/home.jsx'
function App() {
  

  return (
    <div>
      <Navbar/>
      <div id="home" className="overflow-x-visible ">
        <Home/>
      </div>
      <div id="services" className="overflow-x-visible ">
        
      </div>
      <div id="about-us" className="overflow-x-visible ">
       
      </div>
      <div id="coverage" className="overflow-x-visible ">
        
      </div>
      <div id="contact" className="overflow-x-visible ">
        
      </div>
    </div>
  )
}

export default App
