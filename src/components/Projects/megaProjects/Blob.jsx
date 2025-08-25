import React from "react";

function Blob({ id, blobColor, source }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden md:inline ${source == "smallProjects" && "hidden"}`}
    >
      <div
        className={`absolute -bottom-40 h-90 w-90 rounded-full blur-[200px] md:blur-[150px] ${id == "1" ? "left-1/2 -translate-x-4/4" : "left-1/2 -translate-x-2/3"}`}
        style={{ background: blobColor }}
      ></div>
    </div>
  );
}

export default Blob;
