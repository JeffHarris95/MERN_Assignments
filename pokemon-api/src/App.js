import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000')
      .then(response => {setPokemon(response.data.results)})
  },[]);

  return (
    <div className="App">
      {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
        return (<div key={index}>{pokemon.name}</div>)
      })}
    </div>
  );
}

export default App;
