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
      className={`techColor over relative mb-[250px] h-[440px] rounded px-15 py-10 shadow-lg shadow-blue-950 transition-all duration-700 ease-out select-auto ${
        delayPassed && inView
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div
        className={`flex ${source == "projectDetails" ? "gap-30" : "gap-20"} `}
      >
        {source == "projectDetails" ? (
          <ProjectNameUrl ProjectName={ProjectName} ProjectUrl={ProjectUrl} />
        ) : (
          <SmallProjectNameUrl handleProjectId={handleProjectId} />
        )}

        <ProjectDescription ProjectDescription={PorjectDescription} />
      </div>
      <Blob id={id} blobColor={blobColor} />
      <ProjectImg img={img} id={id} />
    </div>
  );
}

export default Projects;
