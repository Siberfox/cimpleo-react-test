import React, { useState } from "react";
import { connect } from "react-redux";

import { signInStart } from "../../redux/user/user.actions";

import "./auth-form.styles.scss";

const AuthForm = ({ signInStart }) => {
  const [signUp, setSignUp] = useState(false);

  const [userCredentials, setCredentials] = useState({
    login: "",
    password: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <form className="form__wrapper">
      {signUp ? (
        <div className="sign-up">
          <label key="1" className="form__label">
            <span>Login</span>
            <input type="name" />
          </label>
          <label key="2" className="form__label">
            <span>Email</span>
            <input type="email" />
          </label>
          <label key="3" className="form__label">
            <span>Password</span>
            <input type="name" />
          </label>
          <label key="4" className="form__label">
            <span>Confirm Password</span>
            <input type="password" />
          </label>
        </div>
      ) : (
        <div className="sign-in">
          <label key="5" className="form__label">
            <span>Login</span>
            <input type="name" name="login" onChange={handleChange} />
          </label>
          <label key="6" className="form__label">
            <span>Password</span>
            <input type="password" name="password" onChange={handleChange} />
          </label>
        </div>
      )}

      <div className="form__buttons">
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (signUp) {
              setSignUp(!signUp);
            }
            signInStart(userCredentials);
          }}
        >
          LOGIN
        </button>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (!signUp) {
              setSignUp(!signUp);
            }
          }}
        >
          REGISTRATION
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInStart: (credentials) => dispatch(signInStart(credentials)),
});

export default connect(null, mapDispatchToProps)(AuthForm);
