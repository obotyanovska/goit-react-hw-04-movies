import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePreview.module.scss';

const MoviePreview = ({ title, name, src }) => {
  return (
    <div className={styles.BookPreview__thumb}>
      <img
        className={styles.BookPreview__img}
        src={`https://image.tmdb.org/t/p/w300${src}`}
        alt={title}
      />
      <h1 className={styles.BookPreview__title}>{title ? title : name}</h1>
    </div>
  );
};
MoviePreview.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  poster_path: PropTypes.string,
};

MoviePreview.defaultProps = {
  title: null,
  name: null,
  poster_path: null,
};

export default MoviePreview;
