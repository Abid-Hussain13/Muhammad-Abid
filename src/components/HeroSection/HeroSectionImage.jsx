import React from "react";
import Backgroundimg1 from "/img/background1.jpg";
import Backgroundimg2 from "/img/background2.jpg";
import Backgroundimg3 from "/img/background3.jpg";
import Backgroundimg4 from "/img/background4.jpg";
import Backgroundimg5 from "/img/background5.jpg";
import Backgroundimg6 from "/img/background6.jpg";
import { useTheme } from "../context/ThemeContext";

export default function HeroSectionImage({ transformStyle, isBouncing }) {
  const { theme } = useTheme();
  let Backgroundimg;
  if (
    theme == "dark"
      ? (Backgroundimg = Backgroundimg2)
      : (Backgroundimg = Backgroundimg5)
  );

  return (
    <div
      className={`relative mx-auto h-32 w-11/12 sm:h-40 md:h-60 ${
        isBouncing ? "bounce-back" : ""
      }`}
      style={{
        transform: transformStyle,
        transition: "transform 0.40s ease-out",
      }}
    >
      <div className="hero-animation absolute left-1/2 mx-auto w-full max-w-4xl -translate-x-1/2 overflow-hidden rounded-md bg-[#d1037a] transition-all">
        <img
          className="h-full w-full object-cover"
          src={Backgroundimg}
          alt="abstract art background img"
        />
      </div>
    </div>
  );
}
