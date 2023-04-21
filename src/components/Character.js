// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterWrapper = styled.div`
  background-color: #f4f4f4;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Name = styled.h2`
  margin-top: 0;
`;

const Character = ({ name }) => {
  return (
    <CharacterWrapper>
      <Name>{name}</Name>
    </CharacterWrapper>
  );
};

export default Character;