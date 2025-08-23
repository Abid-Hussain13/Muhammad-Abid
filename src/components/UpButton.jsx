import React from "react";

function UpButton() {
  return (
    <div
      className="flex w-11/12 cursor-pointer flex-col items-center"
      onClick={() => window.scrollTo(0, 0)}
    >
      <div>
        <img className="invert" src="icons/up.png" alt="Scroll Up icon" />
      </div>
      <p className="w-40 text-center text-gray-600 capitalize hover:text-gray-500">
        Scroll Back to up
      </p>
    </div>
  );
}

export default UpButton;
