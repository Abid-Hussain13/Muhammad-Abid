import React, { useState } from "react";
import HeroSectionText from "./HeroSectionText";
import HeroSectionImage from "./HeroSectionImage";
function HeroSection() {
  const [transformStyle, setTransformStyle] = useState("");
  const [isBouncing, setIsBouncing] = useState(false);
  const [trackingEnabled, setTrackingEnabled] = useState(false);

  const handleMouseMove = (e) => {
    setTrackingEnabled(true);
    setIsBouncing(false);
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`,
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
    );
    setTrackingEnabled(false);
    setTimeout(() => {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 500);
    }, 300);
  };

  return (
    <div className="xyz relative mx-auto my-5 w-11/12 max-w-7xl select-none">
      <div
        className="mx-auto h-45 w-11/12 md:h-60"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <HeroSectionImage
          transformStyle={transformStyle}
          isBouncing={isBouncing}
        />
        <HeroSectionText
          trackingEnabled={trackingEnabled}
          position={"absolute"}
        >
          Muhammad Abid
        </HeroSectionText>
      </div>
    </div>
  );
}

export default HeroSection;
