import React from 'react';
import '../../styles/Reviews.css';

const EditReview = () => {
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
          <h2 className="medium-title">Edit your review</h2>
          <form
            action="/book/<%= book_id %>/<%= title%>/<%= review_id %>/edit-review"
            method="post"
            className="form-add-book">
            <div>
              <div className="div-review">
                <div className="rating">
                  {/* 5 stars */}
                  <label>
                    <input type="radio" name="stars" value="1" checked />
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="2" checked />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="3" checked />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="4" checked />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="5" checked />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                  {/* 4 stars */}
                  <label>
                    <input type="radio" name="stars" value="1" checked />
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="2" checked />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="3" checked />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="4" checked />
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
                  {/* 3 stars */}
                  <label>
                    <input type="radio" name="stars" value="1" checked />
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="2" checked />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="3" checked />
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
                  {/* 2 stars */}
                  <label>
                    <input type="radio" name="stars" value="1" checked />
                    <span className="icon">★</span>
                  </label>
                  <label>
                    <input type="radio" name="stars" value="2" checked />
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
                  {/* 1 star */}
                  <label>
                    <input type="radio" name="stars" value="1" checked />
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
                  {/* 0 stars */}
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
                <textarea id="review" name="review">
                  Review to edit
                </textarea>
              </div>
              <button type="submit" className="btn-signup">
                Edit your review
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditReview;
