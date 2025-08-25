import React from "react";
import Marquee from "react-fast-marquee";
import useScrollAnimation from "../useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

function TechMarquee() {
  const { ref, inView, delayPassed } = useScrollAnimation(0.7, 2000);
  const { theme } = useTheme();
  let marqueColor;
  if (theme == "dark" ? (marqueColor = "#00030E") : (marqueColor = "#D4D4D8"));

  return (
    <div
      ref={ref}
      className={`my-10 transform transition-all duration-1000 ease-out ${delayPassed && inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <Marquee speed={40} gradient gradientColor={marqueColor}>
        {Array.from({ length: 14 }, (_, index) => (
          <img
            key={index}
            src={`/MarqueeIcons/icon${index + 1}.png`}
            alt={`icon${index + 1}`}
            className={`mx-10 h-11 w-auto object-contain sm:mx-20 ${theme == "dark" ? "brightness-50 filter" : ""}`}
          />
        ))}
      </Marquee>
    </div>
  );
}

export default TechMarquee;
