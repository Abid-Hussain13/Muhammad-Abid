import React from 'react'
import useScrollAnimation from "../useScrollAnimation";

function LanguageBox({ imgUrl, language, learning , boxColor, delay=0 }) {
    const {ref, inView, delayPassed} = useScrollAnimation(0.5, delay);


  return (
    <div ref={ref} className={`techColor min-h-[135px] p-4 transition-all duration-[2000ms] ease-out  rounded relative space-y-2 shadow-sm shadow-blue-950 group ${
                delayPassed && inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>

            <div className="w-8 h-8 z-10  absolute -top-2 -right-2 shadow-2xl shadow-white">
                <img src={imgUrl}
                    alt={`${language} Logo`}
                    className="w-full h-full object-cover rounded "
                    />
            </div>
            
            <div className='absolute overflow-hidden m-0  inset-0'>
                <div 
                    className="h-20 w-20 absolute -right-8 -top-12 blur-[70px] transition-all duration-700 group-hover:w-40 group-hover:h-40 group-hover:blur-[150px]"
                    style={{background: boxColor}}
                ></div>
            </div>
            
            <p className="font-medium">{language}</p>
            <p className="text-xs font-light">{learning}</p>
        </div>
  )
}

export default LanguageBox