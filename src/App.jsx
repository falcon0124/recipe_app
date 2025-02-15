import { useState } from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/heroSection'
import ImproveSkills from './components/improveSkills'
import QouteSection from './components/QuotesSect'

function App() {
 

  return (
    <>
      
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QouteSection />
      </div>
    </>
  )
}

export default App
