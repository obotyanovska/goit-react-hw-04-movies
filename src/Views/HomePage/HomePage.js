import React, { Component } from 'react';
import MoviesList from '../../Component/MoviesList';
import { fetchTrendingMovies } from '../../Services/api-services.js';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    localStorage.clear();
    this.fetchTrendingMovies();
  }

  fetchTrendingMovies = () => {
    fetchTrendingMovies()
      .then(response => this.setState({ movies: response }))
      .catch(error => console.log(error));
  };

  render() {
    const { movies } = this.state;
    return <MoviesList movies={movies} />;
  }
}

export default HomePage;
