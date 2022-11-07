import React from 'react';
import '../../styles/SignupPage.css';

const SignupPage = () => {
  return (
    <section className="signup">
      <form action="/signup" method="post">
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
              <input type="username" name="username" id="username" placeholder="Start typing..." />
            </div>
            <div className="div-email">
              <label htmlFor="email" className="label-email">
                Email
              </label>
              <input type="email" name="email" id="email" placeholder="Start typing..." />
            </div>
            <div className="div-password">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder="Start typing..." />
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