import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 5px;
`;

const MovieCard = ({ movie }) => {
  const {
    /* adult, */
    /* genre_ids: genreIds, */
    overview,
    poster_path: posterPath,
    /* release_date: releaseDate, */
    title,
    vote_average: voteAverage,
    vote_count: voteCount,
  } = movie;

  return (
    <Container>
      <h2>{title}</h2>
      <p>
        ⭐{voteAverage.toFixed(1)} from {voteCount} votes⭐
      </p>
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={`${title} poster`}
        width="200px"
      />
      <p>{overview}</p>
    </Container>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    adult: PropTypes.bool,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    id: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }).isRequired,
};
