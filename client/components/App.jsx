/* eslint-disable jsx-a11y/alt-text */
<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import {getWeather} from '../api/weatherApi'
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
=======
import React, { useState } from 'react'
import {getWeather,valueWeather} from '../api/weatherApi'
function App() {
  const [weather,setWeather]=useState(null)
  const [value,setValue] = useState(null)


  const handleMondayClick = () => {
    return getWeather()
    .then(obj => {
      setWeather(obj)
      
      })
  }

  const weatherStatement = ()=>{
    return valueWeather()
    .then(value=>{
      setValue(value)
    })
  }
 

  return( 
    <>
    <button onClick={handleMondayClick}>Monday</button>
    <p>{weatherStatement}</p>
    
  
  
  <div id ='container'>
    <div id='map'>
      <img width='1200px' src = 'images/map.png' alt='map picture'/>
    </div>
    <div id='windy'>.</div>
    <div id='sunny'>.</div>
    <div id='rainy'>.</div>
    <div id='cloudy'>.</div>
    <div id='snowy'>.</div>
    <div id='stormy'>.</div>
>>>>>>> bc03ea20d90858a90a71307f4064de06e73fd231

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