import React from 'react';
import useFetchSearch from '../../hooks/useFetchSearch';
import Pagination from '../../../../layouts/Pagination';
import usePagination from '../../hooks/usePagination';
import queryString from 'query-string';
import '../../styles/TagPage.css';

const parsed = queryString.parse(window.location.search);
const query: any[] = [parsed.q];

const SearchPage = () => {
  const books = useFetchSearch();
  const pagination = usePagination();
  const book = books.slice(pagination.firstPostIndex, pagination.lastPostIndex);
  const newQuery = typeof query[0] === 'string' ? query[0] : query[0].join(', ');

  return (
    <div>
      <section className="book-background">
        <div className="book-separator">
          <section className="section-title">
            <h3 className="search-title"> {`${newQuery}`} </h3>
          </section>
          <section className="search-img"></section>
        </div>
      </section>

      <section className="search-details">
        <div className="search-details-book">
          {book.map((value, index: number) => {
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
        totalPosts={books.length}
        postsPerPage={pagination.postsPerPage}
        setCurrentPage={pagination.setCurrentPage}
        currentPage={pagination.currentPage}
      />
    </div>
  );
};

export default SearchPage;
export { query };
