import React from 'react';
import Tabs from './Tabs';
import Corner from './Corner';
import IBookPageProps from '../../../../types/IBookPageProps';
import useLoader from '../../../../hooks/useLoader';
import Loader from '../../../../components/ui/Loader';
import '../../styles/BookPageMain.css';

const BookPageMain = ({ book, title, bookid }: IBookPageProps) => {
  const loader = useLoader();
  return loader ? (
    <section className="book-details">
      <div className="book-details-section">
        <Loader />
      </div>
    </section>
  ) : (
    <section className="book-details">
      <div className="book-details-section">
        <Tabs book={book} title={title} bookid={bookid} />
        <Corner book={book} title={title} />
      </div>
    </section>
  );
};

export default BookPageMain;
