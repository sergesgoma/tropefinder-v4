import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/SignupPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  axios.defaults.withCredentials = true;

  const login = () => {
    axios
      .post('/login', {
        username: username,
        password: password
      })
      .then((response) => {
        if (!response.data.message) {
        } else {
          console.log(response.data);
        }
      });
  };
  return (
    <section className="signup login">
      <form action="/login" method="post">
        <div className="wrapper">
          <div className="signup-left login-left">
            <a href="/" className="back">
              <span className="arrow-left">
                {' '}
                <i className="fa-solid fa-arrow-left"></i>
              </span>
              Back
            </a>
            <h2 className="medium-title">Log in</h2>
            <p>
              Don't have an account? <a href="/signup">Create one now</a>
            </p>
            <div className="div-username">
              <label htmlFor="username" className="label-username">
                Username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                placeholder="Start typing..."
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="div-password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Start typing..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="signup-button" onClick={login}>
              Log in
            </button>
          </div>
          <div className="signup-right"></div>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
