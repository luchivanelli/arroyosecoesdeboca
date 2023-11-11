import React, { useRef } from 'react'
import './styles/sede.css'

import peñaTerminada from '../images/peña.jpeg'
import ToggleModal from './ToggleModal'
import ToggleModal2 from './ToggleModal2'
import Modal from './Modal'
import ModalInicios from './ModalInicios'
import ModalAvances from './ModalAvances'
import ModalActual from './ModalActual'

const Sede = () => {
  const refModal = useRef()
  const modalInicios = useRef()
  const modalAvances = useRef()
  const modalActual = useRef()

  return (
    <div className='sede' id='sede'>
        <h3 className='sede-title'>Proyecto sede</h3>
        <p className='sede-description'>La sede del CABJ es un proyecto que comenzó hace años y que fue creciendo día a día con <b>esfuezo, dedicación y sacrificio.</b> El objetivo es que los xeneizes de la zona puedan disfrutar de un lugar propio. Se deja el alma y el corazón para avanzar y cumplir el sueño de todos.
        Se planeó, se empezó, se está ejecutando y se logrará, a todo pulmón y <b>POR AMOR A BOCA</b>
        </p>
        {/* <span>* Deslizá para ver más imágenes</span> */}

        <div className='sede-buttons-container d-flex align-items-center'>
          <button className='sede-button' onClick={()=> ToggleModal2(modalInicios)}>Inicios</button>
          <button className='sede-button' onClick={()=> ToggleModal2(modalAvances)}>Avances</button>
          <button className='sede-button' onClick={()=> ToggleModal2(modalActual)}>Actual</button>
          <button className='sede-button' onClick={()=> ToggleModal(refModal, peñaTerminada)}>Terminado</button>
        </div>

        <Modal refModal={refModal}/>
        <ModalInicios modalInicios={modalInicios}/>
        <ModalAvances modalAvances={modalAvances}/>
        <ModalActual modalActual={modalActual}/>
        
    </div>
  )
}

export default Sede
