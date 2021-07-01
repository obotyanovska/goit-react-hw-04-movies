import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import routes from '../../../routes';
import styles from './ButtonGoBack.module.scss';

class ButtonGoBack extends Component {
  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.movies);
  };

  render() {
    return (
      <button
        type="button"
        className={styles.Button}
        onClick={this.handleGoBack}
      >
        Go back
      </button>
    );
  }
}

export default withRouter(ButtonGoBack);
