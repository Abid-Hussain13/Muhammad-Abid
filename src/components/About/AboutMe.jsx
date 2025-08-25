import React from "react";
import useScrollAnimation from "../useScrollAnimation";

function AboutMe() {
  const { ref, inView, delayPassed } = useScrollAnimation(0.2, 2000);

  return (
    <div
      ref={ref}
      className={`group transform transition-all duration-1000 ease-out ${
        delayPassed && inView
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      {/* Flex wrapper so image + paragraph align together */}
      <div className="flex items-start">
        {/* Image (sticks with paragraph) */}
        <div className="w-7 flex-shrink-0 md:w-9 lg:w-11">
          <img
            className="h-auto w-full rotate-12 transition-all duration-500 ease-out group-hover:rotate-45"
            src="img/brain-in-space.png"
            alt="brain in space image"
          />
        </div>

        {/* Paragraph */}
        <p className="pt-5 text-center text-[12px] sm:text-[14px] lg:text-[15px] xl:text-[16px]">
          Hey, I'm Muhammad Abid, a curious Full Stack Developer with over 3
          years of experience based in Dunyapur, Pakistan. I'm always striving
          to grow and learn something new to build better stuff for better
          results. I specialize in Frontend Development with a focus on modern
          user interface and performance. I describe myself as a passionate
          developer who loves coding, learning, growing.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
