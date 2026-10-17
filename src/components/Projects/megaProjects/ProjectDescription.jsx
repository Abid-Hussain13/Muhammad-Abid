import React from "react";

function ProjectDescription({ ProjectDescription, source }) {
  return (
    <div
      className={`text-center sm:text-start md:inline ${source == "smallProjects" && "hidden lg:w-[3500px]"}`}
    >
      <span
        className={`font-body scale-z-100 text-[13px] leading-6 font-normal sm:leading-6 lg:text-[15px] ${source == "smallProjects" ? "pb-40 sm:pb-0" : "pb-4 sm:pb-0"}`}
      >
        {ProjectDescription}
      </span>
    </div>
  );
}

export default ProjectDescription;
