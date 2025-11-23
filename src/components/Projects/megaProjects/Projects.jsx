import React from "react";
import ProjectNameUrl from "./ProjectNameUrl";
import ProjectDescription from "./ProjectDescription";
import useScrollAnimation from "../../useScrollAnimation";
import ProjectImg from "./ProjectImg";
import Blob from "./Blob";
import SmallProjectNameUrl from "./smallProjectNameUrl";

function Projects({
  id,
  ProjectName,
  PorjectDescription,
  ProjectUrl,
  img,
  blobColor,
  source,
  handleProjectId,
}) {
  const { ref, inView, delayPassed } = useScrollAnimation(0.2, 2000);

  return (
    <div
      ref={ref}
      className={`md:techColor over relative ${source == "smallProjects" ? "mt-[170px] min-h-[370px] sm:mb-0 sm:min-h-[320px] md:mt-0 md:mb-[250px] md:min-h-[440px] md:shadow-blue-950" : "mb-[150px] min-h-[440px] pb-20 shadow-md shadow-blue-950 sm:mb-[150px] sm:pb-0 md:mb-[200px] lg:mb-[250px]"} rounded px-4 pt-8 transition-all duration-700 ease-out select-auto sm:px-6 sm:py-10 md:px-10 md:shadow-lg lg:px-15 ${
        delayPassed && inView
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div
        className={`sm:flex ${source == "projectDetails" ? "gap-8 sm:gap-12 md:gap-15 lg:gap-30" : "md:gap-10 lg:gap-20"} `}
      >
        {source == "projectDetails" ? (
          <ProjectNameUrl ProjectName={ProjectName} ProjectUrl={ProjectUrl} />
        ) : (
          <SmallProjectNameUrl handleProjectId={handleProjectId} />
        )}

        <ProjectDescription
          ProjectDescription={PorjectDescription}
          source={source}
        />
      </div>
      <Blob id={id} blobColor={blobColor} source={source} />
      <ProjectImg img={img} id={id} source={source} />
    </div>
  );
}

export default Projects;
