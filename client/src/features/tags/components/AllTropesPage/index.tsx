import React from 'react';
import useTropes from '../../../../hooks/useTropes';
import Pagination from '../../../../layouts/Pagination';
import usePagination from '../../hooks/usePagination';
import '../../styles/AllTropesPage.css';

const AllTropesPage = () => {
  const tropes = useTropes();
  const pagination = usePagination();
  const trope = Object.values(tropes).slice(pagination.firstPostIndex, pagination.lastPostIndex);

  return (
    <div>
      <section className="book-background">
        <div className="book-separator">
          <section className="section-title">
            <h3 className="search-title">All Tropes</h3>
          </section>
          <section className="search-trope-img"></section>
        </div>
      </section>
      <section className="search-details">
        <div className="search-details-book">
          {trope.map((value, index) => {
            return (
              <p className="trope" key={index}>
                <a href={'/tags/' + value}>{value} </a>
              </p>
            );
          })}
        </div>
      </section>
      <Pagination
        totalPosts={tropes.length}
        postsPerPage={pagination.postsPerPage}
        setCurrentPage={pagination.setCurrentPage}
        currentPage={pagination.currentPage}
      />
    </div>
  );
};

export default AllTropesPage;
