import { useState } from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/heroSection'
import ImproveSkills from './components/improveSkills'

function App() {
 

  return (
    <>
      
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
      </div>
    </>
  )
}

export default App
