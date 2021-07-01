import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import styles from './MovieDetailsPage.module.scss';
import { fetchMovieById } from '../../Services/api-services';
import MovieDetails from '../../Component/MovieDetails';
import MovieCast from '../../Component/MovieDetails/MovieCast';
import MovieReviews from '../../Component/MovieDetails/MovieReviews';
import routes from '../../routes';

class MovieDetailsPage extends Component {
  state = {
    id: null,
    poster_path: null,
    title: null,
    name: null,
    release_date: null,
    vote_average: null,
    genres: null,
    overview: null,
    cast: [],
    reviews: [],
  };

  componentDidMount() {
    this.fetchMovieDetails();
  }

  fetchMovieDetails = () => {
    const id = this.props.match.params.movieId;
    fetchMovieById(id)
      .then(response =>
        this.setState({
          ...response,
          cast: response.credits.cast,
          reviews: response.reviews.results,
        }),
      )
      .catch(error => console.log(error));
  };

  render() {
    const {
      poster_path,
      title,
      name,
      release_date,
      vote_average,
      genres,
      overview,
      cast,
      reviews,
      id,
    } = this.state;

    const BASE_URL = 'https://image.tmdb.org/t/p/w300';

    return (
      <>
        {id && (
          <MovieDetails
            src={poster_path}
            title={title ? title : name}
            release={release_date.slice(0, 4)}
            score={Math.round(vote_average * 10)}
            descr={overview}
            genres={
              genres.length > 0
                ? genres.map(genre => genre.name).join(' ')
                : undefined
            }
            baseUrl={BASE_URL}
          />
        )}

        <ul className={styles.AdditionalData}>
          <h3 className={styles.AdditionalData__title}>
            Additional information
          </h3>
          <li>
            <NavLink
              to={`${this.props.match.url}/cast`}
              className={styles.NavLink}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${this.props.match.url}/reviews`}
              className={styles.NavLink}
            >
              Reviws
            </NavLink>
          </li>
        </ul>

        <Route
          path={routes.movieDetailsCast}
          render={props => {
            return (
              cast.length > 0 && (
                <MovieCast {...props} cast={cast} baseUrl={BASE_URL} />
              )
            );
          }}
        />
        <Route
          path={routes.movieDetailsReviews}
          render={props => {
            return reviews.length > 0 ? (
              <MovieReviews {...props} reviews={reviews} />
            ) : (
              <p className={styles.AdditionalData__textCap}>
                We don't have any reviews for this movie
              </p>
            );
          }}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
