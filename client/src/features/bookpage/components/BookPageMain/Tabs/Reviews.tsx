import React from 'react';
import '../../../styles/Reviews.css';

interface IToggle {
  toggleState: number;
}

const Reviews = ({ toggleState }: IToggle) => {
  return (
    <div className={toggleState === 3 ? 'content  active-content' : 'content'}>
      <div className="review-wrapper">
        <p className="p-review">Only TropeFinder members can share their reviews.</p>
        <div className="review-list bt-grey">
          <div className="center my-3">
            <a
              href={'/book/book.book_id/book.title/write-review'}
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
