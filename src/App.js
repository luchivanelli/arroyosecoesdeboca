import './index.css'
import Header from "./components/Header"
import Home from "./components/Home"
import LaPeña from './components/LaPeña'
import Sede from './components/Sede'
import Viajes from './components/Viajes'
import Jornadas from './components/Jornadas'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <LaPeña />
      <Sede />
      <Viajes />
      <Jornadas />
    </div>
  )
}

export default App

