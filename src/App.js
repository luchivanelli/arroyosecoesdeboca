import './index.css'
import Header from "./components/Header"
import Home from "./components/Home"
import LaPeña from './components/LaPeña'
import Sede from './components/Sede'
import Viajes from './components/Viajes'
import Jornadas from './components/Jornadas'
import Socio from './components/Socio'
import Footer from './components/Footer'
import { IconArrowBigUp } from '@tabler/icons-react';

const Button = ()=> {
  return (
    <a href='#header' className='button'><IconArrowBigUp/></a>
  )
}

const App = () => {
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
  )
}

export default App

