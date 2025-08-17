import React from "react";
import AboutMe from "./AboutMe"
import AboutTech from './AboutTech'
import TechMarquee from "./TechMarquee";

function About() {
  
  return (
    <div className="w-3/4 mx-auto section overflow-visible"  >
      <AboutMe />
      <AboutTech />
      <TechMarquee />
    </div>
  );
}

export default About;
