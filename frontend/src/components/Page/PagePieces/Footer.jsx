import linkedinLogo from '../../../assets/images/Logos/linkedinLogo3d.png'
import instagramLogo from '../../../assets/images/Logos/instagramLogo3d.png'
import whatsAppLogo from '../../../assets/images/Logos/whatsAppLogo.png'

import chibi1 from '../../../assets/images/img/chibi_gafas_vr_1.png'

import {Link} from "../../"

function Footer() {

  const linkProps={
    "LinkedIn":{
      "className":"redes_s",
      "href":"https://www.instagram.com/flexavr/?igsh=MWY4anNoc2VhbjRzMA%3D%3D#",
      "src":linkedinLogo,
    },
    "Instagram":{
      "className":"redes_s",
      "href":"https://www.instagram.com/flexavr/?igsh=MWY4anNoc2VhbjRzMA%3D%3D#",
      "src":instagramLogo,
    },
    "WhatsApp":{
      "className":"redes_s contact_fixed sticker",
      "href":"https://api.whatsapp.com/send?phone=573178872122&text=Hola,%20quiero%20saber%20m%C3%A1s%20sobre%20Flexa%20VR",
      "src":whatsAppLogo,
    }
  }

  const keys = Object.keys(linkProps)

  return (
    <footer id='footer' >
      <div draggable="false">
        <img className="sticker" src={chibi1} alt="chibi vr" draggable="false"/>
      </div>
      <p>Visitanos en nuestras redes</p>
      <ul className="redes">
        <li className="redes_s_list">
          {
            keys.map(objKey=>{
            return (
              <Link key={`link_${objKey}`} alt={objKey} {...linkProps[objKey]}></Link>
            )})
          }
        </li>
      </ul>
      <p>Encuentranos</p>
      <p>Lunes a viernes 10 a.m. - 5 p.m.</p>
      <span>Flexa VR</span>
    </footer>
  )
}

export default Footer
