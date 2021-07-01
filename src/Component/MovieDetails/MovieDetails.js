import React from 'react';
import PropTypes from 'prop-types';
import noPoster from '../../Images/No_image_poster.png';
import styles from './MovieDetails.module.scss';
import ButtonGoBack from './ButtonGoBack';

const MovieDetails = ({
  src,
  title,
  release,
  score,
  descr,
  genres,
  baseUrl,
}) => {
  return (
    <>
      <ButtonGoBack />
      <div className={styles.MovieDetails}>
        <img src={src ? `${baseUrl}${src}` : noPoster} alt={title} />
        <div className={styles.MovieData}>
          <h1 className={styles.MovieData__heading}>
            {title} ({release})
          </h1>

          <p className={styles.MovieData__content}>User score: {score}%</p>
          <h2 className={styles.MovieData__title}>Overview</h2>
          <p className={styles.MovieData__content}>{descr}</p>
          <h2 className={styles.MovieData__title}>Genres</h2>
          <p className={styles.MovieData__content}>{genres}</p>
        </div>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  release: PropTypes.string,
  score: PropTypes.number,
  descr: PropTypes.string,
  genres: PropTypes.string,
  baseUrl: PropTypes.string,
};

MovieDetails.defaultProps = {
  src: null,
  title: null,
  release: null,
  score: null,
  descr: 'No overview',
  genres: 'No data',
  baseUrl: 'https://image.tmdb.org/t/p/w300',
};

export default MovieDetails;
