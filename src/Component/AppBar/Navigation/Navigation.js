import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import routes from '../../../routes';

const Navigation = () => {
  return (
    <ul className={styles.Navigation}>
      <li className={styles.Navigation__item}>
        <NavLink
          exact
          to={routes.home}
          className={styles.Navigation__link}
          activeClassName={styles.Navigation__link_active}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.Navigation__item}>
        <NavLink
          to={routes.moviesPage}
          className={styles.Navigation__link}
          activeClassName={styles.Navigation__link_active}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
