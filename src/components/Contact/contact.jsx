import React from "react";
import HeroSectionText from "../HeroSection/HeroSectionText";
import ContactLinks from "./contactLinks";
import ContactForm from "./contactForm";

function Contact() {
  return (
    <div className="mx-auto flex min-h-screen w-11/12 items-center justify-center">
      <div>
        <HeroSectionText trackingEnabled={false} position={"relative"}>
          Contact
        </HeroSectionText>

        <div className="mx-auto mt-12 grid w-[800px] gap-20 md:grid-cols-5">
          <ContactLinks />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
