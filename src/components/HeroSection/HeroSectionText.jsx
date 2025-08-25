import React from "react";

function HeroSectionText({ children, trackingEnabled, position }) {
  return (
    <h1
      id="about"
      className={`heading dark:text-light-300 left-1/2 flex -translate-x-1/2 flex-col bg-fixed text-3xl font-medium tracking-wider whitespace-nowrap transition-all duration-700 md:text-7xl md:hover:tracking-[20px] ${position == "absolute" ? "absolute top-[50%] sm:top-[70%] md:top-[84%]" : "relative text-center"} ${
        trackingEnabled ? "trackingActive" : ""
      }`}
    >
      <span className="hero-text-animation mt-10 cursor-pointer md:mt-0">
        {children}
      </span>
      {children == "Muhammad Abid" && (
        <span className="hero-text-animation text-center text-[8px] font-normal sm:text-[10px] md:text-[12px]">
          Full Stack Developer
        </span>
      )}
    </h1>
  );
}

export default HeroSectionText;
