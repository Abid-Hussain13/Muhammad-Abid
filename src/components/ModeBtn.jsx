import React from "react";
import { useTheme } from "./context/ThemeContext";

function ModeBtn() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="mx-2 rounded bg-slate-200 px-2 py-1 hover:bg-slate-300 md:mx-0 dark:bg-blue-950 dark:hover:bg-blue-900"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <img
          className="h-5 w-5 invert"
          src="icons/light.png"
          alt="Switch to light mode"
        />
      ) : (
        <img
          className="h-5 w-5"
          src="icons/dark.png"
          alt="Switch to dark mode"
        />
      )}
    </button>
  );
}

export default ModeBtn;
