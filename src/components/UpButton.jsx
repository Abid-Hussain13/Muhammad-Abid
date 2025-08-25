import React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function UpButton() {
  return (
    <div
      className="mx-auto flex w-11/12 cursor-pointer flex-col items-center"
      onClick={() => window.scrollTo(0, 0)}
    >
      {/* <div>
        <img
          className="md:w-5 dark:invert"
          src="icons/up.png"
          alt="Scroll Up icon"
        />
      </div> */}
      <KeyboardDoubleArrowUpIcon />
      <p className="w-40 text-center text-gray-600 capitalize hover:text-gray-500">
        Scroll Back to up
      </p>
    </div>
  );
}

export default UpButton;
