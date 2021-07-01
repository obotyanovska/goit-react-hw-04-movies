import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieReviews.module.scss';

const MovieReviews = ({ reviews }) => {
  return (
    <ul className={styles.MovieReviews}>
      {reviews.map(({ content, author, id }) => (
        <li key={id}>
          <h4 className={styles.MovieReviews__name}>{author}</h4>
          <p className={styles.MovieReviews__text}>{content}</p>
        </li>
      ))}
    </ul>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.array,
};

MovieReviews.defaultProps = {
  content: null,
  author: null,
  id: null,
};

export default MovieReviews;
