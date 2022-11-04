import React from 'react';
import Slider from 'react-slick';
import IBookPageProps from '../../../../types/IBookPageProps';
import useBooks from '../../../../hooks/useBooks';
import settings from '../../services/settings';
import'../../styles/BookPageRecs';

const BookPageRecs = ({ book, title }: IBookPageProps) => {
  const tags = book[0].tag;
  const genres = book[0].genres;

  const data = useBooks();

  const recs = data.filter(
    (data) => data.genres.includes(genres[0]) && data.tag.includes(tags[0]) && data.title !== title
  );
  const allRecs = recs.sort(() => 0.5 - Math.random()).slice(0, 20);

 
  return (
    <section className="recs">
      <div id="wrapper">
        <h3 className="recs-title center">In the same vein</h3>
        <Slider {...settings}>
          {allRecs.map((value, index: number) => {
            return (
              <a href={'/book/' + value.book_id + '/' + value.title} key={index}>
                <img className="item" alt={value.title} src={value.img} />
              </a>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default BookPageRecs;