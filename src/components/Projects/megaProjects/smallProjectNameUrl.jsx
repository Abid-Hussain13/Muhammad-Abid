import React from "react";
import smallProjects from "../../../data/smallProjects";
import { RiExternalLinkLine } from "react-icons/ri";

function SmallProjectNameUrl({ handleProjectId }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-0 sm:gap-3 md:gap-0">
      {smallProjects.map((project, index) => (
        <div
          key={project.id}
          className="item my-2 flex w-full cursor-pointer flex-col rounded bg-[#D4D4D8] px-4 py-1 shadow-sm shadow-blue-950 hover:shadow-lg sm:w-70 md:w-50 dark:bg-[linear-gradient(135deg,#010b2e_45%,#000630_10%,#010b30_45%)]"
          onMouseEnter={() => handleProjectId(index)} // 👈 moved here
        >
          <span className="font-normal md:text-sm lg:text-base">
            {project.name}
          </span>
          <a
            className="z-10 flex items-center gap-1 text-xs font-light text-blue-400 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={project.link}
            onClick={(e) => e.stopPropagation()} // 👈 prevents parent click when link is clicked
          >
            View here
            <RiExternalLinkLine />
          </a>
        </div>
      ))}
    </div>
  );
}

export default SmallProjectNameUrl;
