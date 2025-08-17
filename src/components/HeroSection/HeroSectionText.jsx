import React from 'react'

function HeroSectionText({children, trackingEnabled, position}) {
  return (
        <h1
          id='about'
          className={`flex flex-col whitespace-nowrap hover:tracking-[20px] text-7xl font-medium left-1/2 -translate-x-1/2  dark:text-light-300 transition-all duration-700 tracking-wider
            ${position == "absolute" ? "absolute top-[50%]" : "relative text-center"}
            ${
            trackingEnabled ? "trackingActive" : ""
          }`}
        >
          <span className="hero-text-animation">{children}</span>
          {children == "Muhammad Abid" && 
            <span className="text-[12px] font-normal text-center hero-text-animation">
              Full Stack Developer
            </span>
}
        </h1>
  )
}

export default HeroSectionText