import React from 'react'
import Backgroundimg1 from "/img/background1.jpg";
import Backgroundimg2 from "/img/background2.jpg";
import Backgroundimg3 from "/img/background3.jpg";
import Backgroundimg4 from "/img/background4.jpg";
import Backgroundimg5 from "/img/background5.jpg";
import Backgroundimg6 from "/img/background6.jpg";

export default function HeroSectionImage({transformStyle, isBouncing}) {
  return (
    <div
          className={`h-40 md:h-60 w-11/12 mx-auto relative ${
            isBouncing ? "bounce-back" : ""
          }`}
          style={{
            transform: transformStyle,
            transition: "transform 0.40s ease-out",
          }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 transition-all hero-animation bg-[#d1037a] mx-auto w-full max-w-4xl rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Backgroundimg2}
              alt="abstract art background img"
            />
          </div>
        </div>
  )
}
