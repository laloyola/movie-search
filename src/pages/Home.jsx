import React from 'react';
import styled from 'styled-components';

const StyledWelcome = styled.div`
  height: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`;

const StyledOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StyledOption = styled.div`
  display: flex;
  min-height: 100px;
  min-width: 100px;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
`;

const Home = () => (
  <main>
    <StyledWelcome>
      <h1>Welcome to the Home Page</h1>
      <StyledOptions>
        <StyledOption>Movies</StyledOption>
        <StyledOption>TV Shows</StyledOption>
        <StyledOption>Actors and actresses</StyledOption>
      </StyledOptions>
    </StyledWelcome>
  </main>
);

export default Home;
