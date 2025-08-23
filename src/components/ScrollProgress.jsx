import React, { useEffect, useState } from "react";

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

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
        width: "4px", // thickness of bar
        height: "100vh",
        background: "rgba(0,0,0,0.1)", // track background
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "100%",
          height: `${scroll}%`,
          background: "linear-gradient(to bottom, #00c6ff, #0072ff)", // gradient fill
          boxShadow: "0 0 10px #00c6ff, 0 0 20px #0072ff", // glowing effect
          transition: "height 0.2s ease-out",
        }}
      />
    </div>
  );
}

export default ScrollProgress;
