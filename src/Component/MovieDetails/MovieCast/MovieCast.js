import React from 'react';
import PropTypes from 'prop-types';
import noPhoto from '../../../Images/no-image.png';
import styles from './MovieCast.module.scss';

const MovieCast = ({ cast, baseUrl }) => {
  return (
    <ul className={styles.MovieCast}>
      {cast.map(({ profile_path, name, character, cast_id }) => (
        <li className={styles.MovieCast__item} key={cast_id}>
          <img
            src={profile_path ? `${baseUrl}${profile_path}` : noPhoto}
            alt={name}
            width="160"
          />

          <div className={styles.MovieCast__content}>
            <h4 className={styles.MovieCast__title}>{name}</h4>
            <h4 className={styles.MovieCast__title}>{character}</h4>
          </div>
        </li>
      ))}
    </ul>
  );
};

MovieCast.propTypes = {
  cast: PropTypes.array,
  baseUrl: PropTypes.string,
};

MovieCast.defaultProps = {
  baseUrl: 'https://image.tmdb.org/t/p/w300',
  profile_path: null,
  name: null,
  character: null,
  cast_id: null,
};

export default MovieCast;
