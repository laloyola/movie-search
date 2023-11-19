import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 5px;
  width: 300px;
`;

const Movies = () => (
  <Container>
    <h1>Movies</h1>
    <ListsContainer>
      <List>
        <h2>Now Playing</h2>
        <p>Movies playing now</p>
      </List>
      <List>
        <h2>Popular</h2>
        <p>Popular movies</p>
      </List>
      <List>
        <h2>Top Rated</h2>
        <p>Top rated movies</p>
      </List>
      <List>
        <h2>Upcoming</h2>
        <p>Upcoming movies</p>
      </List>
    </ListsContainer>
  </Container>
);

export default Movies;
