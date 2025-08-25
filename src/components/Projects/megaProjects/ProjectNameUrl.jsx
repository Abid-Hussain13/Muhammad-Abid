import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

function ProjectNameUrl({ ProjectName, ProjectUrl }) {
  return (
    <div className="item mt-1 mb-5 ml-3 flex flex-col items-center gap-1 sm:mt-3 sm:mb-0 sm:items-start">
      <span className={`text-base font-semibold md:text-lg lg:text-xl`}>
        {ProjectName}
      </span>
      <a
        className="z-10 flex items-center gap-1 text-sm font-light text-blue-400 underline-offset-2 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        href={ProjectUrl}
      >
        View here
        <RiExternalLinkLine />
      </a>
    </div>
  );
}

export default ProjectNameUrl;
