import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [pokemonApiData, setPokemonApiData] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((response)=> {
        console.log(response.data.results);
        setPokemonApiData(response.data.results);
      })
      .catch((error) => console.log("Error gettimng data", error));
  }, []);

  return (
    <div className="app">
      <h1>Axios Pokemon API with Vite & React</h1>
      <ul>
        {pokemonApiData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
