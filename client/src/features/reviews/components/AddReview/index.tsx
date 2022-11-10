import React from 'react';
import '../../styles/Reviews.css';

const AddReview = () => {
  return (
    <section className="signup write-review-div">
      <div className="container-books">
        <div className="wrapper">
          <a href="/" className="back">
            <span className="arrow-left">
              {' '}
              <i className="fa-solid fa-arrow-left"></i>
            </span>
            Back
          </a>
          <h2 className="medium-title">Write a review</h2>
          <form action="/book/book_id/title" method="post" className="form-add-book">
            <div>
              <div className="div-review">
                <div className="rating">
                  <label>
                    <input type="radio" name="stars" value="1" />
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="2" />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="3" />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="4" />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="5" />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                </div>
                <textarea placeholder="Start typing..." id="review" name="review"></textarea>
              </div>
              <button type="submit" className="btn-signup">
                Post a review
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddReview;
