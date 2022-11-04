import React from 'react';
import '../../../styles/Synopsis.css';
import IBookPageProps from '../../../../../types/IBookPageProps';

const Synopsis = ({ book, title, toggleState }: IBookPageProps) => {
  return (
    <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
      <div className="summary">
        {book.map((value, index: number) => {
          return <div key={index}>{value.summary}</div>;
        })}
      </div>
    </div>
  );
};

export default Synopsis;