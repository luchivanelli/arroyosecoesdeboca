import React from 'react'
import Carrousel2 from './Carrousel2'
import ToggleModal2 from './ToggleModal2'
import './styles/modal.css'

import img19 from '../images/obra32.jpg'
import img20 from '../images/obra33.jpg'
import img21 from '../images/obra34.jpg'
import img22 from '../images/obra35.jpg'
import img23 from '../images/obra36.jpg'
import img24 from '../images/obra38.jpg'
import img25 from '../images/obra39.jpg'
import img26 from '../images/obra31.jpg'

const actual = [img19, img20, img21, img22, img23 ,img24, img25, img26]

const ModalActual = ({modalActual}) => {
  return (
    <div ref={modalActual} className='modal-2 hidden d-flex justify-content-center align-items-center' onClick={()=> ToggleModal2(modalActual)}>
      <Carrousel2 images={actual} title={'Actual'} refModal2={modalActual}/>
    </div>
  )
}

export default ModalActual
