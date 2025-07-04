import { useEffect, useState } from 'react'
// import { useState } from 'react'

import flexavrLogo from '../../../assets/images/Logos/flexaVR.png'

// import {Link} from '../../'

function Header() {
  const [headerClass,setHeaderClass]=useState("background_gradient")

  const handleNavClick=(id)=>{
    const section = document.getElementById(id);
    if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleLogoClick=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const logoLink={
    "alt":"logo flexa",
    "className":"flexa_logo_inicio",
    "href":handleLogoClick,
    "src": flexavrLogo,
    "target":""
  }

  useEffect(()=>{
    const handleScroll = () => {
      window.scrollY > 100 ? setHeaderClass("transparent") : setHeaderClass("background_gradient")
      
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()


    const cleanEffect=()=>{
      window.removeEventListener("scroll", handleScroll)
    }

    return cleanEffect
  },[])
  

  return (
    <>
      <header className={headerClass}>
        <div className="logo_container">
          <a onClick={handleLogoClick} target={logoLink.target} rel={logoLink.target!=="_BLANK"?"":"noopener noreferrer"} draggable="false">
            <img className={logoLink.className} src={logoLink.src} alt={logoLink.alt} draggable="false"/>
          </a>
          
          {/* <button onClick={() => handleNavClick('footer')}>footer</button> */}
          {/* <Link alt="Logo Flexa" {...logoLink}></Link> */}

          <div className='logo_shadow'></div>
        </div>
      </header>
    </>
  )
}

export default Header