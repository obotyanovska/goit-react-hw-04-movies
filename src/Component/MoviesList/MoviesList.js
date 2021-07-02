import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import MoviePreview from './MoviePreview';
import styles from './MoviesList.module.scss';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.MoviesList}>
      {movies.map(({ id, title, name, poster_path }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
            }}
          >
            <MoviePreview title={title} name={name} src={poster_path} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

MoviesList.defaultProps = {
  id: null,
  title: null,
  name: null,
  poster_path: null,
};

export default withRouter(MoviesList);
