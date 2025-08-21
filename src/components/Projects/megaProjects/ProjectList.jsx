import React, { useState } from 'react'
import HeroSectionText from '../../HeroSection/HeroSectionText'
import Projects from './Projects'
import projectDetails from "../../../data/projectDetails"
import smallProjects from '../../../data/smallProjects'

function ProjectList() {
  const [projectId , setProjectId] = useState(0);

  function handleProjectId(id) {
    setProjectId(id);
  }

  return (
    <section className="w-svw  overflow-hidden section" >
      <div id="projects" className={`relative  w-11/12 mx-auto space-y-15`}>

      
        <HeroSectionText trackingEnabled={false} position={"relative"}>Projects</HeroSectionText>
        {projectDetails.map(project => (
          <Projects 
            key={project.id} 
            id={project.id} 
            ProjectName={project.name} 
            PorjectDescription={project.description} 
            blobColor={project.color}
            ProjectUrl={project.link}  
            img={project.imageUrl}
            source={"projectDetails"}
            />
        ))}

        <Projects 
          id={smallProjects[projectId].id} 
          PorjectDescription={smallProjects[projectId].description} 
          img={smallProjects[projectId].imageUrl} 
          blobColor={smallProjects[projectId].color} 
          source={"smallProjects"}
          handleProjectId={handleProjectId}
          />
        </div>
    </section>
  )
}

export default ProjectList