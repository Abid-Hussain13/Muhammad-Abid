import React, { useEffect, useRef, useState } from "react";

function ProjectImg({ id, img, source }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setLoaded(false);
    if (imgRef.current?.complete) setLoaded(true);
  }, [img]);

  return (
    <div
      className={`z-10 ${source == "smallProjects" && "hidden"} ${
        id < 9
          ? "relative mx-auto mt-8 block aspect-[19/10] w-[92%] max-w-[700px] sm:absolute sm:bottom-0 sm:left-1/2 sm:mt-0 sm:w-[92%] sm:-translate-x-1/2 sm:translate-y-1/2"
          : "absolute left-1/2 -mt-10 h-80 -translate-x-1/2 overflow-hidden md:ms-40 md:inline md:w-[450px] lg:ms-40 lg:-mt-35 lg:w-[600px] xl:ms-10"
      }`}
    >
      {!loaded && (
        <div
          className="shimmer absolute inset-0 rounded bg-slate-200 dark:bg-[#111138]"
          aria-hidden="true"
        ></div>
      )}
      <img
        ref={imgRef}
        className={`z-20 h-full w-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${id < 9 ? "object-cover" : ""} ${id == "1" ? "" : "rounded"}`}
        src={img}
        alt={img}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default ProjectImg;
