import React from "react";
import smallProjects from "../../../data/smallProjects";
import { RiExternalLinkLine } from "react-icons/ri";

function SmallProjectNameUrl({ handleProjectId, selectedProjectIndex }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-0 sm:gap-3 md:gap-0">
      {smallProjects.map((project, index) => (
        <div
          key={project.id}
          className={`item my-2 flex w-full cursor-pointer flex-col rounded px-4 py-1 shadow-sm shadow-slate-900/10 hover:shadow-lg sm:w-70 md:w-50 dark:shadow-blue-950 ${
            index == selectedProjectIndex
              ? "bg-blue-200 ring-2 ring-blue-500 dark:bg-[linear-gradient(135deg,#0c1b45_45%,#061038_10%,#0c1b4a_45%)] dark:ring-blue-500"
              : "bg-white dark:bg-[linear-gradient(135deg,#010b2e_45%,#000630_10%,#010b30_45%)]"
          }`}
          onMouseEnter={() => handleProjectId(index)}
        >
          <span className="font-normal md:text-sm lg:text-base">
            {project.name}
          </span>
          <a
            className="z-10 flex items-center gap-1 text-xs font-light text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
            href={project.link}
            onClick={(e) => e.stopPropagation()}
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
