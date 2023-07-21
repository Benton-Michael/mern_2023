import { useState, useEffect } from 'react'

import './App.css'

function App() {
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((response) => {
        console.log('RESPONSE');
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className='App'>
      <h1>Using the Star Wars API!</h1>
      <a href='https://swapi.dev/' target='_bank'>Click here to view</a>
      
    </div>
  );
}

export default App;
