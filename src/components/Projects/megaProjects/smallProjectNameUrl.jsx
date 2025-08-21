import React from 'react'
import smallProjects from '../../../data/smallProjects'
import { RiExternalLinkLine } from "react-icons/ri";

function SmallProjectNameUrl({ handleProjectId }) {
  return (
    <div>
      {smallProjects.map((project, index) => (
        <div
          key={project.id}
          className="projectbtns flex flex-col item py-1 my-3 px-4 w-50 shadow-sm hover:shadow-lg rounded shadow-blue-950 cursor-pointer"
          onMouseEnter={() => handleProjectId(index)}  // 👈 moved here
        >
          <span className="text-md font-normal">{project.name}</span>
          <a
            className="flex z-10 items-center gap-1 text-xs text-blue-400 font-light hover:underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
            href={project.link}
            onClick={e => e.stopPropagation()} // 👈 prevents parent click when link is clicked
          >
            View here
            <RiExternalLinkLine />
          </a>
        </div>
      ))}
    </div>
  )
}

export default SmallProjectNameUrl
