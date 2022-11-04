import React from 'react';
import { useParams } from 'react-router-dom';
import BookPageHeader from './components/BookPageHeader';
import BookPageMain from './components/BookPageMain';
import BookPageRecs from './components/BookPageRecs';
import useBooks from '../../hooks/useBooks';
import './styles/BookPage.css';

const Book = () => {
  const params = useParams();
  const { book_id, title } = params;
  const bookid = Number(book_id);

  const data = useBooks();

  const filteredBook = data.filter((oneBook) => oneBook.title === title);
  const book = Object.values(filteredBook);

  return (
    <div>
      <BookPageHeader book={book} title={title} />
      <BookPageMain book={book} title={title} />
      <BookPageRecs book_id={bookid} title={title} />
    </div>
  );
};

export default Book;
