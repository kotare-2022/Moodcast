import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useSound from 'use-sound'
import stormy from '../sounds/stormy.mp3'

function Stormy () {
  const [play] = useSound(stormy)


  return (
  <>

<img src="images/stormy.jpeg" alt="" />
<button onClick={play}>music</button>

  </>
  )
}

export default Stormy
