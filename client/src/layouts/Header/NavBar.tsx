import React from 'react';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav>
      <a href="/" className="nav-elem">
        Home
      </a>
      <a href="#how" className="nav-elem">
        How it works
      </a>
      <a href="all-tropes" className="nav-elem">
        All Tropes
      </a>

      <a href="/signup" className="btn-signup nav-elem">
        Sign Up
      </a>
      <a href="/login" className="btn-signup btn-login">
        Log in
      </a>

      {/* <a href="/wishlist" className="nav-elem">
        Wishlist
      </a>
      <form action="/logout" method="post">
        <button className="btn-signup btn-logout">Log out</button>
      </form> */}
    </nav>
  );
};
