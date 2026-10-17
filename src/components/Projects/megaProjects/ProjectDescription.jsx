import React from "react";

function ProjectDescription({ ProjectDescription, source }) {
  return (
    <div
      className={`text-center sm:text-start md:inline ${source == "smallProjects" && "hidden lg:w-[3500px]"}`}
    >
      <span
        className={`scale-z-100 text-[12px] leading-1 font-light sm:leading-7 lg:text-sm ${source == "smallProjects" ? "pb-40 sm:pb-0" : "pb-4 sm:pb-0"}`}
      >
        {ProjectDescription}
      </span>
    </div>
  );
}

export default ProjectDescription;
