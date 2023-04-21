import React, { useState, useEffect } from 'react';
import Character from './components/Character'
import axios from 'axios';


const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then((response) => {
        setCharacters(response.data);
        // console.log(response.data)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      {characters.map((character) => (
        <Character key={character.name} name={character.name} />
      ))}
    </div>
  );
};

export default App;

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

 

