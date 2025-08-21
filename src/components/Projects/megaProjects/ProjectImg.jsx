import React from 'react'

function ProjectImg({ id, img}) {
  return (
    <div className={`absolute    z-10 overflow-hidden ${ id == '1' ? 'h-80 w-[1400px] mt-[60px]': "w-[650px] left-1/2 ms-10 -translate-x-1/2 h-90 -mt-20"}`}>
            <img className={` h-full z-20 ${id == '1' ? 'w-full' : 'w-full rounded mx-auto'}`} src={img} alt={img} />
        </div>
  )
}

export default ProjectImg