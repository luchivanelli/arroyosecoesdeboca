import React from 'react'
import './styles/home.css'
import escudo from '../images/escudoBoca.png'

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
      <img src={escudo}/>
      <div>
        <h3>Bienvenidos a la página oficial de</h3>
        <h1>Arroyo Seco es de <b>Boca</b></h1>
      </div>
    </div>
  )
}

export default Home
