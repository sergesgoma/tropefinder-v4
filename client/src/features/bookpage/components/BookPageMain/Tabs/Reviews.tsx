import React from 'react';
import IBookPageProps from '../../../../../types/IBookPageProps';
import '../../../styles/Reviews.css';

const Reviews = ({ book, bookid, title, toggleState }: IBookPageProps) => {
  return (
    <div className={toggleState === 3 ? 'content  active-content' : 'content'}>
      <div className="review-wrapper">
        <p className="p-review">Only TropeFinder members can share their reviews.</p>
        <div className="review-list bt-grey">
          <div className="center my-3">
            <a
              href={'/book/' + bookid + '/' + title + '/write-review'}
              className="reviews-btn write-review">
              Write a review
            </a>
          </div>
          <p className="p-16">No reviews yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
