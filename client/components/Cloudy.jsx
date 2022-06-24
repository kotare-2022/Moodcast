import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useSound from 'use-sound'
import stormy from '../sounds/cloudy.mp3'

function Cloudy () {
  const [play] = useSound(cloudy)

  return (
  <>

<img src="images/cloudy.jpeg" alt="" />
<button onClick={play}>music</button>

  </>
  )
}

export default Cloudy
