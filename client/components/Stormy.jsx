import React from 'react'
import { Link , useParams } from 'react-router-dom'
import useSound from 'use-sound'

import stormy from '../sounds/stormy.mp3';

function Stormy () {
  const [play] = useSound(stormy)

  return (
  <>

<img src='stormy.jpeg' alt='stormy' onClick={play} />

  </>
  )
}

export default Stormy
