import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useSound from 'use-sound'
import windy from '../sounds/windy.mp3'


function Windy () {
  const [play] = useSound(windy)

  return (
  <>

<img src="images/windy.jpeg" alt="" />
<button onClick={play}>music</button>

  </>
  )
}

export default Windy
