import React, { useState, useEffect } from 'react'

import { getWelcome } from '../apiClient'
function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return(<>    
  <h1>{welcomeStatement}</h1>
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
