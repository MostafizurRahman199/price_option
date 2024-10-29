import React from 'react'
import CourasolComponent from '../Courasol/CourasolComponent'
import PriceOption from '../PriceOption/PriceOption';
import BarChat from '../Chart/BarChat';
import Gallery from '../gallery/Gallery'

export default function Home() {
  return (
    <div>
        <CourasolComponent/>
        <PriceOption/>
        <BarChat/>
        <Gallery/> 
    </div>
  )
}
