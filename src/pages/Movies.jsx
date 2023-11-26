import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { getNowPlayingMovies } from '../services/movies';

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

const Movies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      const nowPlayingList = await getNowPlayingMovies();
      setNowPlayingMovies(nowPlayingList.results);
    };
    fetchNowPlayingMovies();
  }, []);

  return (
    <Container>
      <h1>Movies</h1>
      <ListsContainer>
        <List>
          <h1>Now Playing</h1>
          {nowPlayingMovies.length ? (
            nowPlayingMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p>Loading...</p>
          )}
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
};

export default Movies;
