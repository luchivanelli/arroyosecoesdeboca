import React from 'react'
import './styles/sede.css'
import Carrousel from './Carrousel'
import img1 from '../images/obra19.jpg'
import img2 from '../images/obra17.jpg'
import img3 from '../images/obra14.jpg'
import img4 from '../images/obra13.jpg'
import img5 from '../images/obra5.jpeg'
import img6 from '../images/obra18.jpg'
import img7 from '../images/obra16.jpg'
import img8 from '../images/obra24.jpg'
import img9 from '../images/obra2.jpeg'

import img10 from '../images/obra9.jpeg'
import img11 from '../images/obra8.jpeg'
import img12 from '../images/obra3.jpeg'
import img13 from '../images/obra10.jpeg'
import img14 from '../images/obra27.jpg'
import img15 from '../images/obra21.jpg'
import img16 from '../images/obra29.jpg'
import img17 from '../images/obra30.jpg'
import img18 from '../images/obra26.jpg'

import img19 from '../images/obra32.jpg'
import img20 from '../images/obra33.jpg'
import img21 from '../images/obra34.jpg'
import img22 from '../images/obra35.jpg'
import img23 from '../images/obra36.jpg'
import img24 from '../images/obra38.jpg'
import img25 from '../images/obra39.jpg'
import img26 from '../images/obra31.jpg'

import peñaTerminada from '../images/peña.jpeg'


const inicios = [img1, img2, img3, img4 ,img5, img6, img8, img7, img9]

const avances = [img10, img11, img12, img13, img14 ,img15, img16, img17, img18]

const actual = [img19, img20, img21, img22, img23 ,img24, img25, img26]

const Sede = () => {
  return (
    <div className='sede'>
        <h3 className='sede-title'>Proyecto sede</h3>
        <p className='sede-description'>La sede del CABJ es un proyecto que comenzó hace años y que fue creciendo día a día con <b>esfuezo, dedicación y sacrificio.</b> El objetivo es que los xeneizes de la zona puedan disfrutar de un lugar propio. Se deja el alma y el corazón para avanzar y cumplir el sueño de todos.
        Se planeó, se empezó, se está ejecutando y se logrará, a todo pulmón y <b>POR AMOR A BOCA</b>
        </p>
        <span>* Deslizá para ver más imágenes</span>

        <div className='sede-carrouseles d-flex justify-content-evenly'>
            <Carrousel images={inicios} title='Inicios'/>
            <Carrousel images={avances} title='Avances'/>
            <Carrousel images={actual} title='Actualmente'/>
            <div className='proyecto-terminado'>
                <h4>Proyecto terminado</h4>
                <img src={peñaTerminada}/>
            </div>
        </div>
    </div>
  )
}

export default Sede
