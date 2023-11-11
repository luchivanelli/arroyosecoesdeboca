import React from 'react'
import './styles/jornadas.css'
import CardComponent from './Card'
import jor1 from '../images/solidaria2.jpeg'
import jor2 from '../images/solidaria6.jpeg'
import jor3 from '../images/solidaria7.jpeg'
import jor4 from '../images/solidaria8.jpeg'
import jor5 from '../images/solidaria5.jpeg'
import jor6 from '../images/solidaria3.jpeg'
import Acordion from './Acordion'
import { useRef } from 'react'
import Modal from './Modal'
import ToggleModal from './ToggleModal'

const cards = [
  {title: 'Alimentos', info: 'Donaciones de alimentos no perecederos, verduras, carnes, etc.'},
  {title: 'Medicamentos', info: 'Donaciones de medicamentos para todas las edades'},
  {title: 'Varios', info: 'Tapitas plásticas, Útiles escolares, Vestimenta, Juguetes'},
]

const jorImages = [jor1, jor2, jor3, jor4, jor6, jor5]

const Jornadas = () => {
  const refModal = useRef()

  return (
    <div className='jornadas' id='jornadas'>
      <h3 className='jornadas-title'>Jornadas Solidarias</h3>
      <p className='jornadas-description'>La institución realiza <b>acciones y jornadas solidarias</b> para ayudar a los que más lo necesitan. Estamos comprometidos en colaborar con la sociedad más allá de los colores.</p>
      {/* <div className='cards d-flex justify-content-center align-items-center'>
        {cards.map(card => {
          return (<CardComponent title={card.title} info={card.info} key={card.title} />)
        })}
      </div> */}
      <div className='jornadas-acordion'>
        <h4 className='jornadas-acordion-title'>Algunas de nuestras donaciones:</h4>
        <Acordion />
      </div>
      <div className='jornadas-images d-flex justify-content-center align-items-center'>
        {jorImages.map(image => {
          return (<img src={image} onClick={()=> ToggleModal(refModal, image, null)}/>)
        })}
      </div>

      <Modal refModal={refModal}/>
    </div>
  )
}

export default Jornadas
