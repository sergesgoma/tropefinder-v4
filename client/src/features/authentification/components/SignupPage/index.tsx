import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/SignupPage.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  axios.defaults.withCredentials = true;

  const register = () => {
    axios
      .post('/signup', {
        username: username,
        email: email,
        password: password
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <section className="signup">
      <form action="/signup" method="post" onSubmit={register}>
        <div className="wrapper">
          <div className="signup-left">
            <a href="/" className="back">
              <span className="arrow-left">
                {' '}
                <i className="fa-solid fa-arrow-left"></i>
              </span>
              Back
            </a>
            <h2 className="medium-title">Sign up</h2>
            <p>
              Already have an account? <a href="/login">Log in now</a>
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
            <div className="div-email">
              <label htmlFor="email" className="label-email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Start typing..."
                onChange={(e) => setEmail(e.target.value)}
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
            <button type="submit" className="signup-button">
              Sign up
            </button>
          </div>
          <div className="signup-right"></div>
        </div>
      </form>
    </section>
  );
};

export default SignupPage;
