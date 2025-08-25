import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import ProjectList from "./components/Projects/megaProjects/ProjectList";
import Contact from "./components/Contact/contact";
import UpButton from "./components/UpButton";
import ScrollProgress from "./components/ScrollProgress";
import { ThemeProvider } from "./components/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-zinc-300 text-black dark:bg-[linear-gradient(135deg,#00030e_45%,#00031b_10%,#00030e_45%)] dark:text-[#f2f2f2]">
        <Navbar />
        <HeroSection />
        <About />
        <ProjectList />
        <Contact />
        <UpButton />
        <ScrollProgress />
      </div>
    </ThemeProvider>
  );
}

export default App;
