import React from 'react';
import Header from './layouts/Header';
import Routers from './routes';
import Footer from './layouts/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
