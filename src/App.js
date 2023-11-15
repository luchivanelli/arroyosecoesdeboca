import './index.css'
import { useState } from 'react'
import Header from "./components/Header"
import Home from "./components/Home"
import LaPeña from './components/LaPeña'
import Sede from './components/Sede'
import Viajes from './components/Viajes'
import Jornadas from './components/Jornadas'
import Socio from './components/Socio'
import Footer from './components/Footer'
import Loader from './components/Loader'
import { IconArrowBigUp } from '@tabler/icons-react';

const Button = ()=> {
  return (
    <a href='#header' className='button'><IconArrowBigUp/></a>
  )
}

const App = () => {
  const [state, setState] = useState(true)
  
  const componentsRender = ()=> {
    setTimeout(()=> {
      setState(false)
    }, 3000)
  }

  componentsRender()

  if (state) {
    return (
      <Loader/>
    )
  } else {
  return (
    <div className="app">
      <Header />
      <Home />
      <LaPeña />
      <Sede />
      <Viajes />
      <Jornadas />
      <Socio />
      <Footer />
      <Button />
    </div>
  )}
}

export default App

