import React from 'react'
import Marquee from 'react-fast-marquee'
import useScrollAnimation from '../useScrollAnimation'

function TechMarquee() {
  const { ref, inView, delayPassed } = useScrollAnimation(0.7,2000);

  return (
    <div ref={ref} className={`my=10 transition-all duration-1000 ease-out transform ${delayPassed && inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <Marquee speed={40} gradient gradientColor="#00030E">
        {Array.from({ length: 14 }, (_, index) => (
          <img
            key={index}
            src={`/MarqueeIcons/icon${index + 1}.png`}
            alt={`icon${index + 1}`}
            className="mx-20 h-11 w-auto object-contain filter  brightness-50"
          />
          
        ))}
        
      </Marquee>
    </div>
  )
}

export default TechMarquee
