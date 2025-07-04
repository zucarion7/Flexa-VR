import { useState } from 'react'

//----------------------------------
// import chibi1 from '../../assets/images/img/chibi gafas vr 1.jpeg'

import video from '../../assets/videos/Flexa_TULUM.mp4'
import interaccionesVideo from '../../assets/videos/Interacciones.mp4'

import chibiMujer from '../../assets/images/img/chibi3.png'
import chibiHombre from '../../assets/images/img/chibi_gafas_vr_4.png'
import universoImage from '../../assets/images/img/universe.jpeg'

import img360 from '../../assets/images/img/Cinematica360.png'
//----------------------------------



import {Header,Footer} from './PagePieces/'
import {Object3D} from '../'

// import './css/app.css'

function Home() {
  // const [page, setPage] = useState(0)

  return (
    <>
      <Header></Header>
      
      <div className='body_home'>
        <section className='presentation_zone img_container'>
          <div className='text_container'>
            <h1 className='title'>Virtual</h1>
            <p className='text'>es una nueva realidad.</p>
            <p className='text'>Descubre un mundo de experiencias inmersivas</p>
          </div>


          <div>
            <Object3D></Object3D>
            <p className='model_credit'>
              autor <a href="https://sketchfab.com/ElinHohler" target="_blank" rel="noopener noreferrer">Elin Hohler</a>,
              disponible en <a href="https://sketchfab.com/3d-models/meta-quest-3-65a813833dc04eeeb7d33bdca58c184c" target="_blank" rel="noopener noreferrer">Sketchfab</a>
              <br />
              bajo licencia <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>
            </p>
          </div>
          
        </section>

        <main>

          <section className='about'>
            <h2 className='subtitle'>Modelos en realidad virtual</h2>
            <p className="about_paragraph">La imaginación llevada a la realidad. Un universo de posibilidades.</p>

            <div className='about_text'>
              <article className='about_imgs'>
                <img className='about_img sticker' src={chibiMujer} draggable="false"></img>
                <h3>Modelo VR</h3>
                <p className='about_paragraph'>
                  Modelos en escala 1:1 navegables tal como un modelo fisico.
                  facilidad de recorrer infinidad
                  de modelos en un solo espacio.
                  Portabilidad al alcance de una mochila.
                  Vista real de la ubicación.

                </p>
              </article>

              <article className='about_imgs'>
                <img className='about_img sticker' src={chibiHombre} draggable="false"></img>
                <h3>Interacciones y animaciones</h3>
                <p className='about_paragraph'>
                  Las puertas podran abrirse o desaparecer
                  para dar paso y mejorar el entendimiento
                  del espacio. Cambio de materiales y colores
                  en tiempo real. Cambios de vista y de altura 
                  del modelo.
                </p>
              </article>

            </div>
          </section>

          {/* <section className='360render'>
            <div className='kuula_container'> 
             <iframe  class="kuula_iframe" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/7TmYF?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"></iframe>
    
            </div>
          </section> */}


          <section className='video_section'>
            <div className='video_text1'>
              <p className='about_paragraph'>
               No somos solo un render. Somos una experiencia, una experiencia
               inmersiva. Una forma de plasmar tus ideas para compartirlas con el mundo. 
               Una realidad que te transporta a otro mundo en el que cada detalle, cobra vida
              </p>
            </div>
            

            <video className="video" src={interaccionesVideo} width='450'  height='450' controls poster="vistaprevia.jpg">
              Lo sentimos. Este vídeo no puede ser reproducido en tu navegador.
            </video>
          </section>



          <section className='video_section universo_background'>
            <div className='video_text'>
              <p className='about_paragraph'>
                con Flexa VR

                descubre un universo de posibilidades en donde podras
                explorar espacios a la medida y en un mismo lugar.

                Comunicate con nosotros y hagamos de tu proyecto una realidad
              </p>
            </div>
            

            <video className="video" src={video} width='340'  height='600' controls poster="vistaprevia.jpg">
              Lo sentimos. Este vídeo no puede ser reproducido en tu navegador.
            </video>
          </section>

        </main>





        


      </div>
      
      
      <Footer></Footer>
    </>
  )
}

export default Home