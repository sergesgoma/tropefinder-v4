import React from 'react';
import IPaginationProps from '../../types/IPaginationProps';
import './Pagination.css';

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage
}: IPaginationProps) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {' '}
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? 'button-page current-page' : 'button-page'}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
