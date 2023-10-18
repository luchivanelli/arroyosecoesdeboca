import './index.css'
import Header from "./components/Header"
import Home from "./components/Home"
import LaPeña from './components/LaPeña'
import Sede from './components/Sede'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <LaPeña />
      <Sede />
    </div>
  )
}

export default App

