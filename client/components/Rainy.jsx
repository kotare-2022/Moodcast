import React from 'react'
import { Link , useParams } from 'react-router-dom'
import useSound from 'use-sound';

import rainy from '../sounds/rainy.mp3'

function Rainy () {
  const [play] = useSound(rainy) 

  return (
  <>

    <img  src='rainy.png' alt='rainy' onClick={play} />

  </>
  )
}

export default Rainy
