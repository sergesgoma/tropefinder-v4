import React from 'react';
import './Main/MultiSelect';
import './Main.css';
import { MultiSelect } from './MultiSelect';

export const Main = () => {
  return (
    <>
      <main>
        <form action="/tag" method="get">
          <div className="wrapper">
            <div className="main-div">
              <h2 className="big-title">
                Trope<span className="blue">Finder</span>, <br />
                <span className="italic medium-font">the trope way to find a book</span>
              </h2>
              <div className="slider">
                <div className="slider-text1">evil clown</div>
                <div className="slider-text2">enemies to lovers</div>
                <div className="slider-text3">the chosen one</div>
                <div className="slider-text4">unreliable narrator</div>
              </div>

              <MultiSelect />
              
            </div>
          </div>
        </form>
      </main>
      <div className="bg-mobile"></div>
    </>
  );
};
