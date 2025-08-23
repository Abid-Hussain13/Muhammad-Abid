import React from "react";
import useScrollAnimation from "../useScrollAnimation";

function AboutMe() {
  const { ref, inView, delayPassed } = useScrollAnimation(0.2, 2000);
  return (
    <div
      ref={ref}
      className={`group transform text-center transition-all duration-1000 ease-out ${
        delayPassed && inView
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div className="absolute right-249 bottom-15 w-12">
        <img
          className="h-auto w-full rotate-12 transition-all duration-500 ease-out group-hover:rotate-45"
          src="img/brain-in-space.png"
          alt="brain in space image"
        />
      </div>

      <p className={`ps-5`}>
        Hey, I'm Muhammad Abid, a curious Full Stack Developer with over 3 years
        of experience based in Dunyapur, Pakistan. I'm always striving to grow
        and learn something new to build better stuff for better results. I
        specialize in Frontend Development with a focus on modern user interface
        and performance. I describe myself as a passionate developer who loves
        coding, learning, growing.
      </p>
    </div>
  );
}

export default AboutMe;
