import React, { Component, Suspense, lazy } from 'react';
import { fetchMovieByName } from '../../Services/api-services';
import SearchBar from '../../Component/SearchBar';
import Spinner from '../../Component/Spinner/Spinner.js';

const MoviesList = lazy(() =>
  import('../../Component/MoviesList' /* webpackChunkName: 'movies-list' */),
);

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.props.history.push({ search: `query=${searchQuery}` });
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    const { searchQuery } = this.state;
    fetchMovieByName(searchQuery)
      .then(response => this.setState({ movies: response }))
      .catch(error => console.log(error));
  };

  onSubmit = value => {
    this.setState({ searchQuery: value });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />

        <Suspense fallback={<Spinner />}>
          {movies.length > 0 && <MoviesList movies={movies} />}
        </Suspense>
      </>
    );
  }
}

export default MoviesPage;
