import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    // both of these methods accept callbacks as parameters
    .then((response) => {
      console.log(`RESPONSE: ${response}`);
      // the info is inside data and results
      console.log(response);

    })
    .catch((error) => {
      console.log(error);

    })
  }, [] )

  return (
    <div className='App'>
      <h1>API intro</h1>

    </div>
  );
}

export default App
