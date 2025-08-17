import React from 'react'
import HeroSectionText from '../HeroSection/HeroSectionText'
import Projects from './Projects'
import projectDetails from "../../data/projectDetails"

function ProjectList() {
  return (
    <section className='relative section w-11/12 mx-auto space-y-15'>
        <HeroSectionText trackingEnabled={false} position={"relative"}>Projects</HeroSectionText>
        {projectDetails.map(project => (
          <Projects key={project.id} ProjectName={project.name} PorjectDescription={project.description} ProjectUrl={project.link}  img={project.imageUrl}/>
        ))}
    </section>
  )
}

export default ProjectList