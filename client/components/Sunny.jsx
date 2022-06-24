import React from 'react'
import { Link , useParams } from 'react-router-dom'
import useSound from 'use-sound'

import sunny from '../sounds/sunny.mp3'

function Sunny () {
  const [play] = useSound(sunny)

  return (
  <>

<img src='sunny.jpeg' alt='sunny' onClick={play} />

  </>
  )
}

export default Sunny
