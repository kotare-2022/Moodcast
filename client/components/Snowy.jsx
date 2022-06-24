import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useSound from 'use-sound'
import snowy from '../sounds/snowy.mp3'

function Snowy () {
  const [play] = useSound(snowy)

  return (
  <>
<img src="images/snowy.jpeg" alt="" />
<button onClick={play}>music</button>

  </>
  )
}

export default Snowy
