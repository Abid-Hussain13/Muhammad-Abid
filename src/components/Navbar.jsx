import React from 'react'
import Siteicon from '/img/icon3.png'
import Siteicon4 from '/img/icon4.png'


function Navbar() {
  return (
    <header className="w-11/12 ms-auto me-auto">
      <nav className="flex justify-between items-center mt-3 py-3 border-b-1 border-blue-900">
        <div>
            <img className="w-12" src={Siteicon} alt="Site Icon" />
        </div>
        <div className="space-x-5 ">
            <a href='#about'>About</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
            <a href="https://drive.google.com/file/d/148BLG8D_Zd6EFlYN5BlyJ92PE7MQCaez/view?usp=drive_link" target='_blank' rel="noopener noreferrer">Resume</a>
        </div>
    </nav>
    </header>
    
  )
}

export default Navbar