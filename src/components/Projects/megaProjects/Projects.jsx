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
  selectedProjectIndex,
}) {
  const { ref, inView, delayPassed } = useScrollAnimation(0.2, 2000);

  return (
    <div
      ref={ref}
      className={`md:techColor over relative ${source == "smallProjects" ? "mt-[170px] mb-15 min-h-[370px] sm:mb-0 sm:min-h-[320px] md:mt-0 md:mb-[250px] md:min-h-[440px] md:shadow-blue-950" : "border border-blue-200/70 bg-white/95 pb-6 shadow-xl shadow-blue-950/40 sm:mb-[160px] sm:min-h-[400px] sm:pb-10 md:mb-[180px] md:min-h-[440px] lg:mb-[210px] dark:border-blue-950/80 dark:bg-[#030012] dark:shadow-blue-950/70"} rounded px-4 pt-8 transition-all duration-700 ease-out select-auto sm:px-6 sm:py-10 md:px-10 md:shadow-lg lg:px-15 ${
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
          <SmallProjectNameUrl
            handleProjectId={handleProjectId}
            selectedProjectIndex={selectedProjectIndex}
          />
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
