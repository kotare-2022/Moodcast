import React from 'react'
import { Link , useParams } from 'react-router-dom'
import useSound from 'use-sound'

import windy from '../sounds/windy.mp3';

function Windy () {
  const [play] = useSound(windy)

  return (
  <>

<img src='windy.jpeg' alt='windy' onClick={play}>Windy  </img>

  </>
  )
}

export default Windy
