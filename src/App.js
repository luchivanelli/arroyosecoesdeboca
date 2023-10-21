import './index.css'
import Header from "./components/Header"
import Home from "./components/Home"
import LaPeña from './components/LaPeña'
import Sede from './components/Sede'
import Viajes from './components/Viajes'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <LaPeña />
      <Sede />
      <Viajes />
    </div>
  )
}

export default App

