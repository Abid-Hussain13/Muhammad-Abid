import React from "react";

function ProjectDescription({ ProjectDescription, source }) {
  return (
    <div
      className={`text-center sm:text-start md:inline ${source == "smallProjects" && "hidden"}`}
    >
      <span className="scale-z-100 pb-40 text-[12px] leading-1 font-light sm:pb-0 sm:leading-7 lg:text-sm">
        {ProjectDescription}
      </span>
    </div>
  );
}

export default ProjectDescription;
