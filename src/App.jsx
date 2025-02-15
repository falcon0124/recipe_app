import { useState } from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/heroSection'
import ImproveSkills from './components/improveSkills'
import QouteSection from './components/QuotesSect'
import ChiefsSection from './components/chefs'
import Footer from './components/footer'

function App() {
 

  return (
    <>
      
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QouteSection />
        <ChiefsSection />
      </div>
      <Footer />
    </>
  )
}

export default App
