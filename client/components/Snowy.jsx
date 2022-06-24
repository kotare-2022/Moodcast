import React from 'react'
import { Link , useParams } from 'react-router-dom'
import useSound from 'use-sound'
import snowy from '../sounds/snowy.mp3'



function Snowy () {
const [play] = useSound(snowy)

  return (
  <>

    <img src='snowy.jpeg' alt='snowy' onClick={play} />

  </>
  )
}

export default Snowy
