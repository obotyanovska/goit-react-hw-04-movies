import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from './Component/AppBar';
import routes from './routes';
import Spinner from './Component/Spinner/Spinner.js';

const HomePage = lazy(() =>
  import('./Views/HomePage' /* webpackChunkName: 'home-page' */),
);
const MoviesPage = lazy(() =>
  import('./Views/MoviesPage' /* webpackChunkName: 'movies-page' */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './Views/MovieDetailsPage' /* webpackChunkName: 'moviedetails-page' */
  ),
);

class App extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route
              path={routes.movieDetailsPage}
              component={MovieDetailsPage}
            />
            <Route path={routes.moviesPage} component={MoviesPage} />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
