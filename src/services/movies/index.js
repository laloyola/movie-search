import axios from 'axios';

export const getNowPlayingMovies = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_API_TOKEN,
    },
  };

  return axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
};

export const getPopularMovies = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: { language: 'en-US', page: '1' },
    headers: { accept: 'application/json' },
  };
  axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
};
