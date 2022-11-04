import React from 'react';
import { Main } from './components/Main';
import { How } from './components/How';
import { RandomTropes } from './components/RandomTropes';

export const Home = () => {
  return (
    <div>
      <Main />
      <How />
      <RandomTropes />
    </div>
  );
};
