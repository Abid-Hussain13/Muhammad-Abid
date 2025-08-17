import React from 'react'
import Marquee from 'react-fast-marquee'
import useScrollAnimation from '../useScrollAnimation'

function TechMarquee() {
  const { ref, inView, delayPassed } = useScrollAnimation(0.7,2000);

  return (
    <div ref={ref} className={`my=10 transition-all duration-1000 ease-out transform ${delayPassed && inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <Marquee pauseOnHover speed={50} gradient gradientColor="#00030E">
        {Array.from({ length: 14 }, (_, index) => (
          <img
            key={index}
            src={`/MarqueeIcons/icon${index + 1}.png`}
            alt={`icon${index + 1}`}
            className="mx-10 h-16 w-auto object-contain"
          />
        ))}
      </Marquee>
    </div>
  )
}

export default TechMarquee
