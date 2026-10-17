import React from "react";

function ProjectImg({ id, img, source }) {
  return (
    <div
      className={`z-10 ${source == "smallProjects" && "hidden"} ${
        id < 9
          ? "mx-auto mt-8 block w-[92%] max-w-[700px] sm:mt-10"
          : "absolute left-1/2 -mt-10 h-80 -translate-x-1/2 overflow-hidden md:ms-40 md:inline md:w-[450px] lg:ms-40 lg:-mt-35 lg:w-[600px] xl:ms-10"
      }`}
    >
      <img
        className={`z-20 w-full ${id < 9 ? "h-auto" : "h-full"} ${id == "1" ? "" : "rounded"}`}
        src={img}
        alt={img}
      />
    </div>
  );
}

export default ProjectImg;
