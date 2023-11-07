import React from 'react'
import Carrousel2 from './Carrousel2'
import ToggleModal2 from './ToggleModal2'
import './styles/modal.css'

import img1 from '../images/obra19.jpg'
import img2 from '../images/obra17.jpg'
import img3 from '../images/obra14.jpg'
import img4 from '../images/obra13.jpg'
import img5 from '../images/obra5.jpeg'
import img6 from '../images/obra18.jpg'
import img7 from '../images/obra16.jpg'
import img8 from '../images/obra24.jpg'
import img9 from '../images/obra2.jpeg'

const inicios = [img1, img2, img3, img4 ,img5, img6, img8, img7, img9]

const ModalInicios = ({modalInicios}) => {

  return (
    <div ref={modalInicios} className='modal-2 hidden d-flex justify-content-center align-items-center' onClick={()=> ToggleModal2(modalInicios)}>
      <Carrousel2 images={inicios} title={'Inicios'}/>
    </div>
  )
}

export default ModalInicios