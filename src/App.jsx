import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import PriceOption from './Components/PriceOption/PriceOption'
import BarChat from './Components/Chart/BarChat'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar/>
    <PriceOption/>
    <BarChat/>
   </div>
  )
}

export default App
