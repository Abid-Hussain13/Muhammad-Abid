import React from "react";
import Backgroundimg2 from "/img/background2.jpg";
import Backgroundimg5 from "/img/background5.jpg";
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
      className={`relative mx-auto h-32 w-full sm:h-40 sm:w-11/12 md:h-60 ${
        isBouncing ? "bounce-back" : ""
      }`}
      style={{
        transform: transformStyle,
        transition: "transform 0.40s ease-out",
      }}
    >
      <div
        className={`hero-animation absolute left-1/2 mx-auto w-full max-w-4xl -translate-x-1/2 overflow-hidden rounded-md transition-all`}
        style={{
          backgroundImage: `url(${Backgroundimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: transformStyle,
          transition: "transform 0.40s ease-out",
        }}
      ></div>
    </div>
  );
}
