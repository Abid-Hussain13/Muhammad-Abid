import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import About from './components/About/About'
import ProjectList from './components/Projects/ProjectList'

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />    
      <About />
      <ProjectList />
    </div>
  )
}

export default App
