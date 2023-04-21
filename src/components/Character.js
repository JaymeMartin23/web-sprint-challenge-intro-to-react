// Write your Character component here
import React, { useState, UseEffect } from 'react';
import styled from 'styled-components'




const Character = props => {
    return (
        <div>
            {
                props.character.map
            }
        </div>
    )
}

//**  const Character = ({ character }) => {
//   return (
    // <CharacterWrapper>
    //   <Name>{character.name}</Name>
    //   <p>Height: {character.height}</p>
    //   <p>Mass: {character.mass}</p>
    //   <p>Hair color: {character.hair_color}</p>
    //   <p>Skin color: {character.skin_color}</p>
    //   <p>Eye color: {character.eye_color}</p>
    //   <p>Birth year: {character.birth_year}</p>
    //   <p>Gender: {character.gender}</p>
    // </CharacterWrapper>
//   );
// }; */

export default Character;