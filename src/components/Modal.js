import React from 'react'
import ToggleModal from './ToggleModal'
import './styles/modal.css'

const Modal = ({refModal}) => {
  return (
    <div className='modal hidden d-flex justify-content-center align-items-center' onClick={()=> ToggleModal(refModal)} ref={refModal}>
      <h3></h3>
      <img />
    </div>
  )
}

export default Modal
