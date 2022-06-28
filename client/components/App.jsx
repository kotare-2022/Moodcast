/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Windy from './Windy'
import Home from './Home'
import Sunny from './Sunny'
import Rainy from './Rainy'
import Snowy from './Snowy'
import Stormy from './Stormy'
import Cloudy from './Cloudy'


function App() {


  return( 
    <>

 <Routes>
 <Route path="/" element={<Home />} />
  <Route path="/windy" element={<Windy />} />
  <Route path="/Sunny" element={<Sunny />} />
  <Route path="/Rainy" element={<Rainy />} />
  <Route path="/Cloudy" element={<Cloudy />} />
  <Route path="/Snowy" element={<Snowy />} />
  <Route path="/Stormy" element={<Stormy />} />
 </Routes>
</>
  ) 
}

export default App
