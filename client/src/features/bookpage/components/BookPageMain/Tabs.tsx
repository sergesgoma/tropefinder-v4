import React, { useState } from 'react';
import Details from './Tabs/Details';
import Reviews from './Tabs/Reviews';
import Synopsis from './Tabs/Synopsis';
import IBookPageProps from '../../../../types/IBookPageProps';
import '../../styles/Tabs.css';

const Tabs = ({ book, title, bookid }: IBookPageProps) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return(
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}>
          Synopsis
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}>
          Details
        </button>
        <button
          className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(3)}>
          Reviews
        </button>
      </div>

      <div className="content-tabs">
        <Synopsis book={book} toggleState={toggleState} />
        <Details book={book} title={title} toggleState={toggleState} />
        <Reviews book={book} bookid={bookid} title={title} toggleState={toggleState} />
      </div>
    </div>
  );
};

export default Tabs;
