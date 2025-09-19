import React from "react";

function ProjectImg({ id, img, source }) {
  return (
    <div
      className={`absolute z-10 overflow-hidden md:inline ${source == "smallProjects" && "hidden"} ${
        id < 9
          ? "mt-[30px] h-45 w-[550px] sm:mt-[60px] sm:h-60 sm:w-[800px] md:h-70 md:w-[1000px] lg:h-80 lg:w-[1400px]"
          : "left-1/2 -mt-10 h-80 -translate-x-1/2 md:ms-40 md:w-[450px] lg:ms-40 lg:-mt-35 lg:w-[600px] xl:ms-10"
      }`}
    >
      <img
        className={`z-20 h-full ${id == "1" ? "w-full" : "w-full rounded"}`}
        src={img}
        alt={img}
      />
    </div>
  );
}

export default ProjectImg;
