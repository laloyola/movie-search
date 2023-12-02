import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../services/movies';

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
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesLists = Promise.all([
        getNowPlayingMovies(),
        getPopularMovies(),
        getTopRatedMovies(),
        getUpcomingMovies(),
      ]).then((lists) => lists.map((list) => list.results));
      const [nowPlaying, popular, topRated, upcoming] = await moviesLists;
      setNowPlayingMovies(nowPlaying);
      setPopularMovies(popular);
      setTopRatedMovies(topRated);
      setUpcomingMovies(upcoming);
    };
    fetchMovies();
  }, []);

  return (
    <Container>
      <h1>Movies</h1>
      <ListsContainer>
        {[
          [nowPlayingMovies, 'Now Playing'],
          [popularMovies, 'Popular'],
          [topRatedMovies, 'Top Rated'],
          [upcomingMovies, 'Upcoming'],
        ].map(([list, listName]) => (
          <List key={listName}>
            <h1>{listName}</h1>
            {list.length ? (
              list.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            ) : (
              <p>Loading...</p>
            )}
          </List>
        ))}
      </ListsContainer>
    </Container>
  );
};

export default Movies;
