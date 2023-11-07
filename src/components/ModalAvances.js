import React from 'react'
import Carrousel2 from './Carrousel2'
import ToggleModal2 from './ToggleModal2'
import './styles/modal.css'

import img10 from '../images/obra9.jpeg'
import img11 from '../images/obra8.jpeg'
import img12 from '../images/obra3.jpeg'
import img13 from '../images/obra10.jpeg'
import img14 from '../images/obra27.jpg'
import img15 from '../images/obra21.jpg'
import img16 from '../images/obra29.jpg'
import img17 from '../images/obra30.jpg'
import img18 from '../images/obra26.jpg'

const avances = [img10, img11, img12, img13, img14 ,img15, img16, img17, img18]

const ModalAvances = ({modalAvances}) => {
  return (
    <div ref={modalAvances} className='modal-2 hidden d-flex justify-content-center align-items-center' onClick={()=> ToggleModal2(modalAvances)}>
      <Carrousel2 images={avances} title={'Avances'} refModal2={modalAvances}/>
    </div>
  )
}

export default ModalAvances