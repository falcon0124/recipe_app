import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom"

import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'

import Home from './pages/home'
import Recipes from './pages/recipe'
import Settings from './pages/settings'

function App() {
 

  return (
    <>
      <Router>
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/recipe" element={<Recipes />}/>
            <Route path="/settings" element={<Settings />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
