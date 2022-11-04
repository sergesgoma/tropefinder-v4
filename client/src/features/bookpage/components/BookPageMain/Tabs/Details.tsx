import React from 'react';
import IBookPageProps from '../../../../../types/IBookPageProps';
import '../../../styles/Details.css';

const Details = ({ book, title, toggleState }: IBookPageProps) => {
  function removeDuplicates(data: any[]) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }
  return (
    <div className={toggleState === 2 ? 'content  active-content' : 'content'}>
      <table>
        <tbody>
          {book.map((value, index: number) => {
            const filteredGenres = removeDuplicates(value.genres);
            const allGenres = filteredGenres.sort();
            return (
              <div key={index}>
                <tr>
                  <td className="bold">Genres:</td>
                  <td className="book-genre">
                    {allGenres.map((genres: string, index: number) => {
                      return (
                        <a href={'/genre/' + genres} key={index}>
                          {genres}
                        </a>
                      );
                    })}
                  </td>
                </tr>
                {/* <% if (book.series) { %> */}
                <tr>
                  <td className="bold">Series:</td>
                  <td>
                    <a href={'/series/' + value.seriesName}>
                      {value.seriesName} #{value.numSeries}
                    </a>
                  </td>
                </tr>
                {/* <% } %> */}
                <tr>
                  <td className="bold">First Published:</td>
                  <td>{value.firstPublished}</td>
                </tr>
                {/* <tr>
                  <td className="bold">Publisher:</td>
                  <td>
                    <a href="/publisher/<%= book.publisher %>">{value.publisher}</a>
                  </td>
                </tr> */}
                <tr>
                  <td className="bold">Format:</td>
                  <td>{value.format}</td>
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Details;