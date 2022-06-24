/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import {getWeather} from '../api/weatherApi'
import { Routes, Route } from 'react-router-dom'



function Home() {
  const [weather,setWeather]=useState(null)


  const handleMondayClick = () => {
    return getWeather()
    .then(obj => {
      setWeather(obj)
      
      })
  }
  function valueWeather (){
    return getWeather()
    .then(()=>{
    if (weather?.snowfall_sum[0] ==0 && weather?.rain_sum[0] == 0
        && weather?.temperature_2m_max[0] > 15 ){
          return 'sunny'
        }
        })

  }


  // const checkWeathere =()=>{
  //   return checkWeather()
  //     .then(value =>{
  //       setWeather(value)
  //     })
    
  //   if (weather?.rain_sum[0] > 0 ){
  //     return 'rainy'

  // }else if (weather?.snowfall_sum[0] > 0){
  //   return 'snowy'
  //  if (weather?.snowfall_sum[0] ==0 && weather?.rain_sum[0] == 0
  //   && weather?.temperature_2m_max[0] > 15 ){
  //     return 'sunny'
  

  // }

  return( 
    <>
    <button onClick={handleMondayClick}>Monday</button>
    <p>{valueWeather}</p>
    {/* {weather && <p>Welly TIME: {weather?.time[0]}</p>}
    {(weather?.temperature_2m_min[0]>15)?<p>Welly Weather:sunny </p>:<p>Welly Weather:soooo cold</p>} */}
    {/* {weather && <p>Welly TempMin: {weather?.temperature_2m_min[0]} </p>} */}

  
  
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

export default Home