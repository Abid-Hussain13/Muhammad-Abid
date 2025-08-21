import React from 'react'
import { RiExternalLinkLine } from "react-icons/ri";


function ProjectNameUrl({ProjectName, ProjectUrl}) {
  return (
    <div className="flex flex-col item gap-1 ml-3 mt-3">
            <span className={`text-xl font-semibold `}>{ProjectName}</span>
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
  )
}

export default ProjectNameUrl