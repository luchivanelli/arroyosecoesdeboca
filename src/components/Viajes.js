import React from 'react'
import './styles/viajes.css'
import Carrousel from './Carrousel'
import img1 from '../images/viaje1.jpeg'
import img2 from '../images/viaje2.jpeg'
import img3 from '../images/viaje3.jpeg'
import img4 from '../images/viaje4.jpeg'
import img5 from '../images/viaje5.jpeg'
import img6 from '../images/viaje6.jpeg'
import img7 from '../images/viaje7.jpeg'

import img8 from '../images/viaje8.png'
import img9 from '../images/viaje9.png'
import img10 from '../images/viaje10.png'
import img11 from '../images/viaje11.png'

const images1 = [img1, img2, img3, img4, img5, img6, img7]

const Viajes = () => {
  return (
    <div className='viajes'>
      <h3 className='viajes-title'>Viajá con la peña</h3>
      <p className='viajes-description'>Viví una experiencia mágica, única e inolvidable 💙💛💙</p>
      <div className='carrousel-viajes d-flex justify-content-center align-items-center'>
        <Carrousel images={images1}/>
      </div>
      <p className='viajes-info'>* Las formas de pago de los viajes a la cancha son de 48hs antes de partir. De lo contrario, no se guardará el lugar.</p>
      <a className='viajes-button' href='https://api.whatsapp.com/send?phone=543402658558&text=Hola,%20quiero%20saber%20más%20sobre%20los%20viajes%20a%20la%20cancha%20💙💛💙'>Contactate para más info</a>

      <div className='viajes-section'>
        <h4>"YO TE SIGO A TODAS PARTES A DÓNDE VAS, CADA VEZ TE QUIERO MÁS 🎶"</h4>
        <div className='viajes-section-images d-flex'>
            <img src={img8}/>
            <img src={img9}/>
            <img src={img10}/>
            <img src={img11}/>
        </div>
      </div>
    </div>
  )
}

export default Viajes
