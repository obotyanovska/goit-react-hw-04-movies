import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    value: '',
  };

  onInputChange = e => {
    this.setState({ value: e.currentTarget.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.SearchBar}>
        <form className={styles.SearchForm} onSubmit={this.onHandleSubmit}>
          <input
            type="text"
            value={value}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={this.onInputChange}
          />

          <button type="submit" className={styles.SearchForm__btn}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
