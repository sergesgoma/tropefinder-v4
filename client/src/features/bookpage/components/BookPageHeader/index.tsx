import React from 'react';
import DropdownButton from './DropdownButton';
import IBookPageProps from '../../../../types/IBookPageProps';
import useLoader from '../../../../hooks/useLoader';
import Loader from '../../../../components/ui/Loader';
import '../../styles/BookPageHeader.css';

const BookPageHeader = ({ book, title }: IBookPageProps) => {
  const loader = useLoader();
  return loader ? (
    <section className="book-background">
      <div className="book-separator book-separator-mobile">
        <Loader />
      </div>
    </section>
  ) : (
    <section className="book-background">
      {book.map((value, index: number) => {
        return (
          <div className="book-separator book-separator-mobile" key={index}>
            <section className="section-img">
              <img src={value.img} alt={title} className="book-img thumbnail-slow" />
            </section>
            <section className="section-title">
              <h3 className="book-title-big">{title}</h3>
              <h3 className="author-name-block">
                By
                <span className="author-name">
                  <a href={'/author/' + value.author}>{value.author}</a>
                </span>
              </h3>
              <div className="book-btn-row">
                <DropdownButton book={book} title={title} />
                <form action={'/wishlist/' + title} method="post">
                  <button type="submit" className="wishlist">
                    Wishlist <span className="heart">&hearts;</span>
                  </button>
                </form>
              </div>
            </section>
          </div>
        );
      })}
    </section>
  );
};

export default BookPageHeader;
