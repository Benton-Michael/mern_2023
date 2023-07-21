import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';

function App() {

  // We want to store the data and map over it with useState
  // initialized to an empty array
  const [starWarsCharacters, setStarWarsCharacters] = useState([])

  // the object we get back is called response
  // to get to the results array: response.data.results
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((response) => {
        console.log('RESPONSE');
        // console.log(response.data.results);
        setStarWarsCharacters(response.data.results)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className='App'>
      {/* Look in console response > data > data > results Array(10) */}
      <h1>Using the Star Wars API!</h1>
      <a href='https://swapi.dev/' target='_bank'>Click here to view the <b>swapi</b> docs!</a>
      {
        starWarsCharacters.map((character, idx) => (
          <div key={idx}>
            <h2>Name: {character.name}</h2>
          </div>
        ))
      }
      
    </div>
  );
}

export default App;
