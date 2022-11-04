import React from 'react';
import Tabs from './Tabs';
import Corner from './Corner';
import IBookPageProps from '../../../../types/IBookPageProps';
import '../../styles/BookPageMain.css';

const BookPageMain = ({ book, title }: IBookPageProps) => {
  return (
    <section className="book-details">
      <div className="book-details-section">
        <Tabs book={book} title={title} />
        <Corner book={book} title={title} />
      </div>
    </section>
  );
};

export default BookPageMain;
