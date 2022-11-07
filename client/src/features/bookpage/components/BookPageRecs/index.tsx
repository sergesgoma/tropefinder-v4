import React from 'react';
import Slider from 'react-slick';
import IBook from '../../../../types/IBook';
import IBookRecs from '../../../../types/IBookRecs';
import useRecs from '../../hooks/useRecs';
import settings from '../../services/settings';
import '../../styles/BookPageRecs.css';

const BookPageRecs = ({ book_id, title }: IBookRecs) => {
  const recs = useRecs({ book_id, title });
  const allRecs: IBook[] = recs.sort(() => 0.5 - Math.random()).slice(0, 20);
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
