import React from 'react'
import useScrollAnimation from "../useScrollAnimation";


function AboutMe() {
    const { ref, inView, delayPassed } = useScrollAnimation(0.2, 2000);
  return (
    <div className="text-center group">
      <div className='absolute top-108 left-35'>
        <img 
          className='w-14 h-auto rotate-12 group-hover:rotate-45 transition-all duration-500 ease-out'
          src="img/brain-in-space.png" 
          alt="brain in space image" 
        />
      </div>
      
        <p
          ref={ref}
          className={`transition-all duration-1000 ease-out transform ps-5 ${
            delayPassed && inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Hey, I'm Muhammad Abid, a curious Full Stack Developer 
          with over 3 years of experience based in Dunyapur, Pakistan.
          I'm always striving to grow and learn something new to build better
          stuff for better results. I specialize in Frontend Development with a
          focus on modern user interface and performance. I describe myself as a
          passionate developer who loves coding, learning, growing.
        </p>
      </div>
  )
}

export default AboutMe