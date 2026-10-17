import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Backgroundimg5 = "/img/background5.webp";
const Backgroundimg2 = "/img/background2.webp";

export default function HeroSectionImage({ transformStyle, isBouncing }) {
  const { theme } = useTheme();
  const Backgroundimg = theme == "dark" ? Backgroundimg2 : Backgroundimg5;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const image = new Image();
    image.onload = () => setLoaded(true);
    image.src = Backgroundimg;
    if (image.complete) setLoaded(true);
    return () => {
      image.onload = null;
    };
  }, [Backgroundimg]);

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
          transform: transformStyle,
          transition: "transform 0.40s ease-out",
        }}
      >
        {!loaded && (
          <div
            className="shimmer absolute inset-0 rounded-md bg-slate-200 dark:bg-[#111138]"
            aria-hidden="true"
          ></div>
        )}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${Backgroundimg})` }}
        ></div>
      </div>
    </div>
  );
}
