/* eslint-disable jsx-quotes */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }, []);

  const handleBack = () => {
    props.history.goBack();
    setLoading(true);
  };

  if (loading) {
    return <div>Cargando</div>;
  }

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={handleBack}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Redirect to="/404/" />
  );
};

Player.propTypes = {
  playing: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
  getVideoSource: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
