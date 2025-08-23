import React from "react";
import Siteicon from "/img/icon3.png";
import Siteicon4 from "/img/icon4.png";

function Navbar() {
  return (
    <header className="ms-auto me-auto w-11/12">
      <nav className="mt-3 flex items-center justify-between py-3">
        <div>
          <img className="w-12" src={Siteicon} alt="Site Icon" />
        </div>
        <div className="space-x-1 text-sm">
          <a className="rounded px-2 py-1 hover:bg-blue-950" href="#about">
            About
          </a>
          <a className="rounded px-2 py-1 hover:bg-blue-950" href="#projects">
            Projects
          </a>
          <a className="rounded px-2 py-1 hover:bg-blue-950" href="#contact">
            Contact
          </a>
          <a
            className="rounded bg-blue-950 px-2 py-1"
            href="https://drive.google.com/file/d/148BLG8D_Zd6EFlYN5BlyJ92PE7MQCaez/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
