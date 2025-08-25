import React from "react";
import socialLinks from "../../data/socialLinks";

function contactLinks() {
  return (
    <div className="text-center md:col-span-2">
      <h1 className="text-base font-semibold text-gray-500 sm:text-2xl">
        Get in Touch
      </h1>
      <h1 className="sm:text-md flex justify-center gap-1 text-sm font-normal text-gray-500">
        <span className="mt-0.5 sm:mt-0">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abidhussainme1@gmail.com"
            target="_blank"
          >
            <img
              className="h-4 w-4 brightness-0 hover:size-7 sm:h-5 sm:w-5 dark:invert"
              src="public/icons/message.png"
              alt="email icon"
            />
          </a>
        </span>
        <span>abidhussainme1@gmail.com</span>
      </h1>
      <div className="mt-1 flex justify-center">
        {socialLinks.map((item) => (
          <a
            key={item.id}
            className="h-8 w-8 p-1.5 hover:size-9"
            target="_blank"
            href={item.link}
          >
            <img
              className="brightness-0 dark:invert"
              src={item.icon}
              alt={item.icon}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default contactLinks;
