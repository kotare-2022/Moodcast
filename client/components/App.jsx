/* eslint-disable jsx-a11y/alt-text */
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

  </div>
 
</>
  ) 
  }

export default App