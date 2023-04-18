// This is for the fake API. Do not delete!
import React , {useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";

import { worker } from "./mocks/browser";
worker.start();

function App() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchCharacters() {
            const response = await fetch('https://swapi.dev/api/people/');
            const data = await response.json();
            setCharacters(data.results);
        }
        retchCharacters();
    }, []);

    return (
        <div>
          {characters.map((character, index) => (
            <div key={index}>
              <h2>{character.name}</h2>
              <p>Height: {character.height}</p>
              <p>Mass: {character.mass}</p>
            </div>
          ))}
        </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
