import React, { useState } from 'react';
import Characters from './components/Character'
import axios from 'axios';
import "./index.css";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [error, setError] = useState('')
  const [isFetchingData, setIsFetchingData] = useState(false)
  const [characters, setCharacters] = useState([])

  const getData = () => {
    console.log('button pushed')
    axios.get('https://swapi.dev/api/people/')
    .then(response => {
      console.log('response', response.data)
    })
    .catch(error => {
      console.log(`Error ${error}`)
      setError(error)
    })
  }


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars React App</h1>
      <Characters getData={getData} />
    </div>
  );
}

export default App;
