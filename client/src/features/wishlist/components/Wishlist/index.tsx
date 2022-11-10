import React from 'react';
import "../../styles/Wishlist.css";

const Wishlist = () => {
  return (
    <div>
      <section className="book-background">
        <div className="book-separator">
          <section className="section-title">
            <h3 className="search-title center">
              Wishlist of
              <div className="wishlist-username">username</div>
            </h3>
          </section>
          <section className="wishlist-img"></section>
        </div>
      </section>
      <section className="search-details">
        <div className="search-details-book">
          {/* iterate through the wishlist */}
          <div className="search-book">
            <a data-tooltip="book summary" href="/book/book id/book title">
              <img
                src="book address"
                alt="book title"
                className="latest-img thumbnail"
                loading="lazy"
              />
            </a>
            <h3 className="book-title">
              <a href="/book/<%=book[i].book.book_id%>/<%=book[i].book.title%>">Book Title</a>
            </h3>
            <h3 className="author-block">
              By
              <span className="author-name">
                <a href="/author/<%= book[i].book.author %>">Book author</a>
              </span>
            </h3>
          </div>
        </div>

        {/* <div className="search-details-book">
    <div className="search-book">
      <p className="found-tags">No books in your wishlist :'(</p>
      <a href="/" className="return up">Return</a>
    </div>
  </div> */}
      </section>
    </div>
  );
};

export default Wishlist;
