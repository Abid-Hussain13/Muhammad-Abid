import React from 'react'

function Blob({ id, blobColor }) {
  return (
    <div className="absolute overflow-hidden inset-0 z-0 pointer-events-none">
      <div className={` absolute w-90 h-90 rounded-full -bottom-40  blur-[200px] md:blur-[150px]
       ${ id == '1' ? 'left-1/2 -translate-x-4/4' : 'left-1/2 -translate-x-2/3'}`}
       style={{background: blobColor}}
      ></div>
    </div>
  )
}

export default Blob