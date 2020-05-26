/* eslint-disable jsx-quotes */
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getVideoSearched } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });
  const handleSearch = (event) => {
    getVideoSearched(event.target.value);
  };
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder="Buscar..."
        onChange={handleSearch}
      />
    </section>
  );
};

Search.propTypes = {
  isHome: PropTypes.bool,
};

const mapDispatchToProps = {
  getVideoSearched,
};

export default connect(null, mapDispatchToProps)(Search);
