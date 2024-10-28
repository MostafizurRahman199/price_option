import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import PriceOption from './Components/PriceOption/PriceOption'
import BarChat from './Components/Chart/BarChat'
import CourasolComponent from './Components/Courasol/CourasolComponent'
import Gallery from './Components/gallery/Gallery'

function App() {
 

  return (
   <div>
    <Navbar/>
    <CourasolComponent/>
    <PriceOption/>
    <BarChat/>
    <Gallery/>
   </div>
  )
}

export default App
