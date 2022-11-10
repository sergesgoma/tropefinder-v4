import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchTag from '../../hooks/useFetchTag';
import Pagination from '../../../../layouts/Pagination';
import usePagination from '../../hooks/usePagination';
import useLoader from '../../../../hooks/useLoader';
import Loader from '../../../../components/ui/Loader';
import '../../styles/TagPage.css';

const TagPage = () => {
  const loader = useLoader();
  const params = useParams();
  const { tag } = params;

  const data = useFetchTag();

  const pagination = usePagination();
  const book = Object.values(data).slice(pagination.firstPostIndex, pagination.lastPostIndex);

  return loader ? (
    <div>
      <section className="book-background">
        <div className="book-separator">
          <section className="section-title">
            <h3 className="search-title">{tag} </h3>
          </section>
          <section className="search-tag-img"></section>
        </div>
      </section>
      <section className="search-details loader">
        <div className="search-details-book">
          <Loader />
        </div>
      </section>
    </div>
  ) : (
    <div>
      <section className="book-background">
        <div className="book-separator">
          <section className="section-title">
            <h3 className="search-title">{tag} </h3>
          </section>
          <section className="search-tag-img"></section>
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
                  <a href={'/book/' + value.book_id + '/' + value.title}>{value.title}</a>
                </h3>
                <h3 className="author-name-block">
                  By
                  <span className="author-name">
                    <a href={'/author/' + value.author}>{value.author}</a>
                  </span>
                </h3>
              </div>
            );
          })}
        </div>

        {/* <p className="found-tags">No results for 'tag' :'(</p>
        <a href="/" className="return up">
          Return
        </a> */}
      </section>
      <Pagination
        totalPosts={data.length}
        postsPerPage={pagination.postsPerPage}
        setCurrentPage={pagination.setCurrentPage}
        currentPage={pagination.currentPage}
      />
    </div>
  );
};

export default TagPage;
