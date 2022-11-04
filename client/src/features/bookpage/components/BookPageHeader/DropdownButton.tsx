import React from 'react';
import '../../styles/DropdownButton.css';

interface IBookPageProps {
  book: any[];
  title?: string;
}

const DropdownButton = ({ book, title }: IBookPageProps) => {
  const author = book[0].author;
  return (
    <div className="dropdown">
      <button className="dropdown-button dropdown-buy" id="dropdown-button">
        <span className="buy-now">Buy now</span>
        <i className="fa-solid fa-angle-down"></i>
      </button>

      <div className="dropdown-child dropdown-child-buy" id="dropdown-child">
        <p>INTERNATIONAL</p>
        <a
          className="buy-now"
          href={'https://www.amazon.com/s?k=' + title + ' by ' + author}
          target="_blank"
          rel="noopener noreferrer">
          Amazon
        </a>
        <p>USA</p>
        <a
          className="buy-now"
          href={'https://www.barnesandnoble.com/s/<%=' + title + ' by ' + author}
          target="_blank"
          rel="noopener noreferrer">
          Barnes & Noble
        </a>
        <p>FRANCE</p>
        <a
          className="buy-now"
          href={'https://www.cultura.com/search/results?search_query=' + title + ' by ' + author}
          target="_blank"
          rel="noopener noreferrer">
          Cultura
        </a>
        <a
          className="buy-now"
          href={
            'https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=' +
            title +
            ' by ' +
            author
          }
          target="_blank"
          rel="noopener noreferrer">
          Fnac
        </a>
      </div>
    </div>
  );
};

export default DropdownButton;
