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
      className={`mx-auto flex w-11/12 items-center justify-center transition-all duration-700 ease-out sm:min-h-screen ${
        delayPassed && inView
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div id="contact" className="w-11/12">
        <HeroSectionText trackingEnabled={false} position={"relative"}>
          Contact
        </HeroSectionText>

        <div className="mx-auto mt-15 mb-10 grid max-w-[800px] gap-8 md:mb-0 md:grid-cols-5 md:gap-20">
          <ContactLinks />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
