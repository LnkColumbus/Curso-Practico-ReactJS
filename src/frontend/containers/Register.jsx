/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerUser } from '../actions';
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };

  return (
    <React.Fragment>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={handleInput}
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button type="submit" className="button">
              Registrarme
            </button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </React.Fragment>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func,
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
