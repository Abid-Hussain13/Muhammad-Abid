import React from "react";
import useScrollAnimation from "../useScrollAnimation";

function LanguageBox({ imgUrl, language, learning, boxColor, delay = 0 }) {
  const { ref, inView, delayPassed } = useScrollAnimation(0.5, delay);

  return (
    <div
      ref={ref}
      className={`group relative min-h-[135px] space-y-2 rounded p-4 shadow-xs shadow-sky-950 transition-all duration-[2000ms] ease-out dark:bg-[#030012] dark:shadow-sm dark:shadow-blue-950 ${
        delayPassed && inView
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div className="absolute -top-2 -right-2 z-10 h-6 w-6 shadow-2xl shadow-white sm:h-8 sm:w-8">
        <img
          src={imgUrl}
          alt={`${language} Logo`}
          className="h-full w-full rounded object-cover"
        />
      </div>

      <div className="absolute inset-0 m-0 overflow-hidden">
        <div
          className="absolute -top-12 -right-8 h-20 w-20 blur-[70px] transition-all duration-700 group-hover:h-40 group-hover:w-40 group-hover:blur-[150px]"
          style={{ background: boxColor }}
        ></div>
      </div>

      <p className="text-sm font-medium md:text-base lg:text-lg">{language}</p>
      <p className="text-[11px] font-light md:text-xs">{learning}</p>
    </div>
  );
}

export default LanguageBox;
