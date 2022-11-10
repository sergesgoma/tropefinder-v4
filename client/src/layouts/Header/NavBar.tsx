import React from 'react';
import './NavBar.css';
import useAuth from '../../hooks/useAuth';

export const NavBar = () => {
  const isAuth = useAuth();
  return (
    <nav>
      <a href="/" className="nav-elem">
        Home
      </a>
      <a href="#how" className="nav-elem">
        How it works
      </a>
      <a href="/all-tropes" className="nav-elem">
        All Tropes
      </a>
      <a
        href="/signup"
        className={isAuth ? 'btn-signup nav-elem hide-div' : 'btn-signup nav-elem show-div'}>
        Sign Up
      </a>
      <a
        href="/login"
        className={isAuth ? 'btn-signup btn-login hide-div' : 'btn-signup btn-login show-div'}>
        Log in
      </a>
      <a href="/wishlist" className={isAuth ? 'nav-elem show-div' : 'nav-elem hide-div'}>
        Wishlist
      </a>
      <form action="/logout" method="post">
        <button
          className={isAuth ? 'btn-signup btn-logout show-div' : 'btn-signup btn-logout hide-div'}>
          Log out
        </button>
      </form>{' '}
    </nav>
  );
};
