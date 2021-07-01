import axios from 'axios';

const API_KEY = '384eb8ab4176debc217be91023edb374';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
  );
  return response.data.results;
};

const fetchMovieByName = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
  return response.data.results;
};

const fetchMovieById = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&append_to_response=credits,reviews`,
  );
  return response.data;
};

export { fetchTrendingMovies, fetchMovieByName, fetchMovieById };
