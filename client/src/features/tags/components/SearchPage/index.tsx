import React from 'react';
import useBooks from '../../../../hooks/useBooks';
import Pagination from '../../../../layouts/Pagination';
import usePagination from '../../hooks/usePagination';
import '../../styles/TagPage.css';

const SearchPage = () => {
  const queryString = require('query-string');
  const parsed = queryString.parse(window.location.search);
  const query = [parsed.search];

  const data = useBooks();
  const allBooks = data.filter((oneBook) => oneBook.tag.includes(query[0]));

  const pagination = usePagination();
  const book = allBooks.slice(pagination.firstPostIndex, pagination.lastPostIndex);

  return (
    <div>
      <section className="book-background">
        <div className="book-separator">
          <section className="section-title">
            <h3 className="search-title"> {query} </h3>
          </section>
          <section className="search-img"></section>
        </div>
      </section>

      <section className="search-details">
        <div className="search-details-book">
          {book.map((value: any, index: number) => {
            return (
              <div className="search-book" key={index}>
                <a data-tooltip={value.summary} href={'/book/' + value.book_id + '/' + value.title}>
                  <img
                    src={value.img}
                    alt={value.title}
                    className="latest-img thumbnail"
                    loading="lazy"
                  />
                </a>
                <h3 className="book-title">
                  <a href={'/book/' + value.book_id + '/' + value.title}> {value.title} </a>
                </h3>
                <h3 className="author-block">
                  By
                  <span className="author-name">
                    <a href={'/author/' + value.author}> {value.author} </a>
                  </span>
                </h3>
              </div>
            );
          })}
        </div>
      </section>
      <Pagination
        totalPosts={allBooks.length}
        postsPerPage={pagination.postsPerPage}
        setCurrentPage={pagination.setCurrentPage}
        currentPage={pagination.currentPage}
      />
    </div>
  );
};

export default SearchPage;
