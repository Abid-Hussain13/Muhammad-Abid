import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import About from './components/About/About'
import ProjectList from './components/Projects/megaProjects/ProjectList'
import Contact from './components/Contact/contact'

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />    
      <About />
      <ProjectList />
      <Contact />
    </div>
  )
}

export default App
