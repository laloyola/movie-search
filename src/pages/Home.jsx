import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledWelcome = styled.div`
  height: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const StyledOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StyledOption = styled(Link)`
  text-decoration: none;
  display: flex;
  min-height: 100px;
  min-width: 100px;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
`;

const Home = () => (
  <main>
    <StyledWelcome>
      <h1>Welcome to the L&apos;Movies Home Page</h1>
      <br />
      <h2>What would you like to see?</h2>
      <StyledOptions>
        <StyledOption to="/movies">Movies</StyledOption>
        <StyledOption to="/shows">TV Shows</StyledOption>
        <StyledOption to="/actors">Actors and actresses</StyledOption>
      </StyledOptions>
    </StyledWelcome>
  </main>
);

export default Home;
