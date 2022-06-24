import React from 'react'
import { Link , useParams } from 'react-router-dom'
import useSound from 'use-sound'
import cloud from '../sounds/cloudy.mp3'
function Cloudy () {
  const [play] = useSound(cloud)

  return (
  <>

<img src='cloudy.jpeg' alt='cloudy' onClick={play}>Cloudy  </img>

  </>
  )
}

export default Cloudy
