import React from "react";
import AboutMe from "./AboutMe";
import AboutTech from "./AboutTech";
import TechMarquee from "./TechMarquee";

function About() {
  return (
    <div className="mx-auto mt-[10px] w-3/4 overflow-visible md:mt-[89px] lg:mt-[100px] xl:mt-[125px]">
      <AboutMe />
      <AboutTech />
      <TechMarquee />
    </div>
  );
}

export default About;
