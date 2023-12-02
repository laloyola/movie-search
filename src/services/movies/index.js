import axios from 'axios';
import * as urls from './urls';

const listGetter =
  (url, page = 1) =>
  async () => {
    const options = {
      method: 'GET',
      url,
      params: { language: 'en-US', page: `${page}` },
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

export const getNowPlayingMovies = listGetter(urls.NOW_PLAYING_URL);
export const getPopularMovies = listGetter(urls.POPULAR_URL);
export const getTopRatedMovies = listGetter(urls.TOP_RATED_URL);
export const getUpcomingMovies = listGetter(urls.UPCOMING_URL);
