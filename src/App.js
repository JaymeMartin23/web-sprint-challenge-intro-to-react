import React, { useState, useEffect } from 'react';
import Character from './components/Character'
import axios from 'axios';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
 
  
    const [characters, setCharacters] = useState([]);
  
    useEffect(() => {
      axios 
        .get('https://swapi.dev/api/people/')
        .then((response) => {
          setCharacters(response.data.results)
        })
        .catch((error) => console.error(error));
    }, []);

    const character = character.map(character => {
      if (character)
    })
  
    return (
      <div></div>
    );
  }
  
  export default App;

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

 

