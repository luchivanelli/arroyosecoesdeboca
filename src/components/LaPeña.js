import React from 'react'
import './styles/laPeña.css'
import logo from '../images/logoPeña.jpeg'
import { IconMapPin, IconBrandInstagram, IconBrandFacebook, IconPhone } from '@tabler/icons-react';
import AcordionHistoria from './AcordionHistoria';

const LaPeña = () => {
  return (
    <div id='peña' className='la-peña d-flex justify-content-center align-items-center flex-column'>
      <div className='la-peña-content d-flex justify-content-center align-items-center'>
        <div>
          <h3>¿Quiénes somos?</h3>
          <p><b>"Arroyo Seco es de Boca"</b> es una asociación civil orientada a lo cultural, social y deportivo. Nuestra institución brinda ayuda a todos los bosteros para que puedan estar más cerca del club, y además se enfoca en realizar proyectos para ayudar a la sociedad sin importar los colores</p>
        </div>
        <div className='la-peña-content-logo'>
          <img src={logo}/>
        </div>
      </div>
      <div className='la-peña-contacto d-flex flex-column justify-content-center align-items-center'>
          <p><IconMapPin/> Estamos ubicados en:<br/> <a href='https://www.google.com.ar/maps/place/Gaboto+639,+Arroyo+Seco,+Santa+Fe/@-33.1578758,-60.5054798,17z/data=!3m1!4b1!4m5!3m4!1s0x95b70b9244f614f3:0x779bc14d58006962!8m2!3d-33.1578803!4d-60.5029049?entry=ttu' target='_blank'>Gaboto 639, Arroyo Seco, Santa Fe</a></p>
          <div className='la-peña-contacto-redes d-flex justify-conten-center align-items-center'>
            <a className='d-flex justify-content-center align-items-center' href='https://www.instagram.com/arroyosecoesdeboca12/' target='_blank'><IconBrandInstagram/> Instagram</a>
            <a className='d-flex justify-content-center align-items-center' href='https://www.facebook.com/ARROYOSECOESDEBOCA' target='_blank'><IconBrandFacebook/> Facebook</a>
            <a className='d-flex justify-content-center align-items-center' href="https://api.whatsapp.com/send?phone=543402658558&" target='_blank'><IconPhone/> Contactanos</a>
          </div>
      </div>
      
      <AcordionHistoria />
    </div>
  )
}

export default LaPeña
