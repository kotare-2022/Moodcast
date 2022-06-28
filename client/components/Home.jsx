import React, { useState } from 'react'
import {getWeather} from '../api/weatherApi'
import {Link} from 'react-router-dom'


function Home() {
  const [weather,setWeather]=useState(null)


  const handleMondayClick = () => {
    return getWeather()
    .then(obj => {
      setWeather(obj)
      
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
    {<Link to= {'/windy'}><div id='windy'>.</div></Link>}
    {<Link to= {'/Sunny'}><div id='sunny'>.</div></Link>}
    {<Link to= {'/Cloudy'}><div id='cloudy'>.</div></Link>}
    {<Link to= {'/Snowy'}><div id='snowy'>.</div></Link>}
    {<Link to= {'/Stormy'}><div id='stormy'>.</div></Link>}
    {<Link to= {'/Rainy'}><div id='rainy'>.</div></Link>}
  </div>

</>
  ) 
  }

export default Home

