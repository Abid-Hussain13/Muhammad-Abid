import React, { useEffect, useState } from "react";

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 450);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: isMobile ? "3px" : "4px", // thinner bar on mobile
        height: "100vh",
        background: "rgba(0,0,0,0.1)",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "100%",
          height: `${scroll}%`,
          background: "linear-gradient(to bottom, #00c6ff, #0072ff)",
          boxShadow: isMobile
            ? "0 0 7px #00c6ff" // lighter glow on mobile
            : "0 0 10px #00c6ff, 0 0 20px #0072ff", // full glow on desktop
          transition: "height 0.2s ease-out",
        }}
      />
    </div>
  );
}

export default ScrollProgress;
