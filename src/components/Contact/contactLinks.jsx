import React from "react";
import socialLinks from "../../data/socialLinks";

function contactLinks() {
  return (
    <div className="col-span-2 text-center">
      <h1 className="text-2xl font-semibold text-gray-800">Get in Touch</h1>
      <h1 className="text-md flex justify-center gap-3 font-normal text-gray-800">
        <span>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abidhussainme1@gmail.com"
            target="_blank"
          >
            <img
              className="h-6 w-6 brightness-0 invert hover:size-7"
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
            className="h-8 w-8 p-1.5 hover:size-9"
            target="_blank"
            href={item.link}
          >
            <img
              className="brightness-0 invert"
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
