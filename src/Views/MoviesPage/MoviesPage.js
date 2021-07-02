import React, { Component, Suspense, lazy } from 'react';
import { fetchMovieByName } from '../../Services/api-services';
import SearchBar from '../../Component/SearchBar';
import Spinner from '../../Component/Spinner/Spinner.js';
import queryString from 'query-string';

const MoviesList = lazy(() =>
  import('../../Component/MoviesList' /* webpackChunkName: 'movies-list' */),
);

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: null,
  };

  componentDidMount() {
    const searchQuery = localStorage.getItem('searchQuery');
    const parsedSearchQuery = JSON.parse(searchQuery);

    if (parsedSearchQuery) {
      this.setState({ searchQuery: parsedSearchQuery });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevState.searchQuery;
    const nextSearchQuery = this.state.searchQuery;

    if (prevSearchQuery !== nextSearchQuery) {
      this.props.history.push({ search: `query=${nextSearchQuery}` });
      this.fetchMovies();
      localStorage.setItem(
        'searchQuery',
        JSON.stringify(this.state.searchQuery),
      );
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
