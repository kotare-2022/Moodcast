import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useSound from 'use-sound'
import rainy from '../sounds/rainy.mp3'

function Rainy () {
  const [play] = useSound(rainy)

  return (
  <>

<img  width='2000px' src="images/rainy.jpeg" alt="" />
<button onClick={play}>music</button>
  </>
  )
}

export default Rainy
