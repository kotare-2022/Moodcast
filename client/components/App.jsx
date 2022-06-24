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
    <h1>MOOD FORECAST</h1>   
   <div id = 'weather'> <button onClick={handleMondayClick}>Wellington weather</button>
   {weather && <p>Date: <br/>{weather?.time[1]}</p>}
   {weather && <p>Max temp: {weather?.temperature_2m_max[1]}</p>}
   {weather && <p>Min temp: {weather?.temperature_2m_min[1]}</p>}
   {weather && <p>Rain: {weather?.rain_sum[1]}</p>}
   {weather && <p>Rain: {weather?.snowfall_sum[1]}</p>}



   </div> 
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
