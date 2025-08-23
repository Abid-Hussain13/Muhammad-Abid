import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import ProjectList from "./components/Projects/megaProjects/ProjectList";
import Contact from "./components/Contact/contact";
import UpButton from "./components/upButton";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <ProjectList />
      <Contact />
      <UpButton />
      <ScrollProgress />
    </div>
  );
}

export default App;
