import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

function Projects({ ProjectName, PorjectDescription, ProjectUrl, img }) {
  return (
    <div>
      <div className="relative py-10 px-15 shadow-lg h-[440px] mb-[250px]  shadow-blue-950 techColor rounded  select-auto">
        <div className="flex gap-30 items-center">
          <div className="flex flex-col gap-1">
            <span className="text-xl font-semibold">{ProjectName}</span>
            <a
              className="flex z-10 items-center gap-1 text-sm text-blue-400 font-light hover:underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              href={ProjectUrl}
            >
              View here
              <RiExternalLinkLine />
            </a>
          </div>
          <div>
            <span className="font-light text-sm leading-7">
              {PorjectDescription}
            </span>
          </div>
        </div>
        <div className="absolute overflow-hidden inset-0 z-0">
          <div className="testingColor absolute w-90 h-90 rounded-full -bottom-40 left-1/2 -translate-x-4/4 blur-[200px] md:blur-[150px]"></div>
        </div>
        <div className="absolute mt-[60px] h-80 w-[1260px]  z-10 overflow-hidden">
            <img className="w-full h-full z-20" src={img} alt={img} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
