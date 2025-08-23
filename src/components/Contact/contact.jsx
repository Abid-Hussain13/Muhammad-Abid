import React from "react";
import HeroSectionText from "../HeroSection/HeroSectionText";
import ContactLinks from "./contactLinks";
import ContactForm from "./contactForm";
import useScrollAnimation from "../useScrollAnimation";

function Contact() {
  const { ref, inView, delayPassed } = useScrollAnimation(0.2, 2000);

  return (
    <div
      ref={ref}
      className={`mx-auto flex min-h-screen w-11/12 items-center justify-center transition-all duration-700 ease-out ${
        delayPassed && inView
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div id="contact">
        <HeroSectionText trackingEnabled={false} position={"relative"}>
          Contact
        </HeroSectionText>

        <div className="mx-auto mt-15 grid w-[800px] gap-20 md:grid-cols-5">
          <ContactLinks />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
