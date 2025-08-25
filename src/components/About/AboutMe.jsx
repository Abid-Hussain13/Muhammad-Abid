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
      <div className="flex items-start">
        <div className="w-7 flex-shrink-0 md:w-9 lg:w-11">
          <img
            className="h-auto w-full rotate-12 transition-all duration-500 ease-out group-hover:rotate-45"
            src="img/brain-in-space.png"
            alt="brain in space image"
          />
        </div>

        <p className="pt-5 text-center text-[12px] sm:text-[14px] lg:text-[15px] xl:text-[16px]">
          Hi, I'm Muhammad Abid — a curious Full Stack Web Developer from
          Dunyapur, Pakistan. I have hands-on experience building real-world
          projects and I'm always striving to learn, grow, and create better
          solutions for impactful results. I specialize in Frontend and Backend
          Development, with a strong focus on modern user interfaces, code
          integrity, and performance. I'd describe myself as a passionate
          developer who loves coding, continuous learning, and personal growth.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
