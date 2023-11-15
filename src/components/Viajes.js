import React from 'react'
import './styles/viajes.css'
import { useRef } from 'react'
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
import img12 from '../images/viaje12.png'
import img13 from '../images/viaje13.png'
import Modal from './Modal'
import ToggleModal from './ToggleModal'

import logo1 from '../images/lpf.png'
import logo2 from '../images/libertadores.png'
import logo3 from '../images/copaArg.png'

const images1 = [img1, img2, img3, img4, img5, img6, img7]
const images2 = [logo1, logo2, logo3]

const Viajes = () => {
  const refModal = useRef()
  
  return (
    <div className='viajes' id='viajes'>
      <h3 className='viajes-title'>Viajá con la peña</h3>
      <p className='viajes-description'><b>¿Querés ir a la Bombonera?</b> La peña te lleva a ver los partidos del club más grande del continente. Viví una experiencia mágica, única e inolvidable</p>
      <div className='viajes-content'>
        <div className='carrousel-viajes d-flex justify-content-center align-items-center'>
          <Carrousel images={images1} clase='carrousel-viajes'/>
        </div>
        <div className='viajes-info-content'>
          <p className='viajes-info'>* Las formas de pago de los viajes a la cancha son de 48hs antes de partir. De lo contrario, no se guardará el lugar</p>
          <a className='viajes-button' href='https://api.whatsapp.com/send?phone=543402658558&text=Hola,%20quiero%20saber%20más%20sobre%20los%20viajes%20a%20la%20cancha%20💙💛💙'>Contactate para más info</a>
        </div>
      </div>

      <div className='viajes-section'>
        <div className='viajes-logos-content d-flex justify-content-center align-items-center'>
          <h4>"YO TE SIGO A TODAS PARTES<br/> A DÓNDE VAS,<br/> CADA VEZ TE QUIERO MÁS"🎶</h4>
          <div className='viajes-logos d-flex justify-content-center align-items-center'>
          {images2.map(image => {
              return (
                <img src={image}/>
              )
          })}
          </div>
        </div>
        <div className='viajes-section-images d-flex'>
            <img src={img12} onClick={()=> ToggleModal(refModal, img12, 'Río de Janeiro, Brasil')}/>
            <img src={img13} onClick={()=> ToggleModal(refModal, img13, 'Río de Janeiro, Brasil')}/>
            <img src={img8} onClick={()=> ToggleModal(refModal, img8, 'São Paulo, Brasil')}/>
            <img src={img9} onClick={()=> ToggleModal(refModal, img9, 'Montevideo, Uruguay')}/>
            <img src={img10} onClick={()=> ToggleModal(refModal, img10, 'San Juan, Argentina')}/>
            <img src={img11} onClick={()=> ToggleModal(refModal, img11, 'Mendoza, Argentina')}/>
        </div>
        <p>* Presionar sobre la imagen para ampliarla</p>
      </div>

      <Modal refModal={refModal} />
    </div>
  )
}

export default Viajes
