// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

const Name = styled.h2`
  margin-top: 0;
  
`;

const Character = ({ name, height, gender, birthYear }) => {
  return (
    <CharacterWrapper>
      <Name>{name}</Name>
      {/* <p>Height: {height}</p> */}
      {/* <p>Gender: {gender}</p> */}
      {/* <p>Birth year: {birthYear}</p> */}
    </CharacterWrapper>
  );
};

export default Character;