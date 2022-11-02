import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar';
import logo from '../../assets/img/search.png';
import './Header.css';

export const Header = () => {
  const [header, setHeader] = useState(false);
  const setActiveHeader = () => {
    if (window.scrollY > 50) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    setActiveHeader();
    window.addEventListener('scroll', setActiveHeader);
  }, []);

  return (
    <header className={header ? 'header header-active' : 'header'}>
      <div className="wrapper wrapper-header">
        <div className="logo-container">
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <h1>
            <a href="/">
              trope<span className="blue">finder</span>
            </a>
          </h1>
        </div>
        <NavBar />
      </div>
    </header>
  );
};
