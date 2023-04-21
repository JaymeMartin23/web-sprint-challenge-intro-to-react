import React, { useState, useEffect } from 'react';
import Character from './components/Character'
import axios from 'axios';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  const characterList = characters.map((character) => (
    <Character
      key={character.name}
      name={character.name}
      height={character.height}
      gender={character.gender}
      birthYear={character.birth_year}
    />
  ));

  return (
    <div>
      <h1>Star Wars Characters</h1>
      {characterList}
    </div>
  );
};

export default App;

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

 

