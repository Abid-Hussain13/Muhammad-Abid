import React from 'react'
import Siteicon from '/img/icon3.png'
import Siteicon4 from '/img/icon4.png'


function Navbar() {
  return (
    <header className="w-11/12 ms-auto me-auto">
      <nav className="flex justify-between items-center mt-3 py-3 ">
        <div>
            <img className="w-12" src={Siteicon} alt="Site Icon" />
        </div>
        <div className='text-sm space-x-1'>
            <a className='px-2 py-1 rounded hover:bg-blue-950' href='#about'>About</a>
            <a className='px-2 py-1 rounded hover:bg-blue-950' href="#projects">Projects</a>
            <a className='px-2 py-1 rounded hover:bg-blue-950' href="">Contact</a>
            <a className='px-2 py-1 rounded bg-blue-950' href="https://drive.google.com/file/d/148BLG8D_Zd6EFlYN5BlyJ92PE7MQCaez/view?usp=drive_link" target='_blank' rel="noopener noreferrer">Resume</a>
        </div>
    </nav>
    </header>
    
  )
}

export default Navbar