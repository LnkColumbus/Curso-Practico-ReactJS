/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginRequest } from '../actions';
import Header from '../components/Header';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <React.Fragment>
      <Header isLogin />
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
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
            <button type="submit" className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label htmlFor="cbox1">
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={googleIcon} alt="Google" />
              Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt="Twitter" />
              Inicia sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta
            <Link to="/register"> Regístrate</Link>
          </p>
        </section>
      </section>
    </React.Fragment>
  );
};

Login.propTypes = {
  loginRequest: PropTypes.func,
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);

