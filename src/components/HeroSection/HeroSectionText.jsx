import React from "react";

function HeroSectionText({ children, trackingEnabled, position }) {
  return (
    <h1
      id="about"
      className={`dark:text-light-300 left-1/2 flex -translate-x-1/2 flex-col bg-fixed text-7xl font-medium tracking-wider whitespace-nowrap transition-all duration-700 hover:tracking-[20px] ${position == "absolute" ? "absolute top-[84%]" : "relative text-center"} ${
        trackingEnabled ? "trackingActive" : ""
      }`}
    >
      <span className="hero-text-animation cursor-pointer">{children}</span>
      {children == "Muhammad Abid" && (
        <span className="hero-text-animation text-center text-[12px] font-normal">
          Full Stack Developer
        </span>
      )}
    </h1>
  );
}

export default HeroSectionText;
