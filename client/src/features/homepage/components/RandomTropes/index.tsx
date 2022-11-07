import React from 'react';
import useHome from '../../hooks/useHome';
import useTropes from '../../../../hooks/useTropes';
import useRandomDiv from '../../hooks/useRandomDiv';
import removeDuplicates from '../../../../utils/removeDuplicates';
import '../../styles/RandomTropes.css';

const RandomTropes = () => {
  const randomDiv = useRandomDiv();
  const data = useHome();
  const tropes = useTropes();

  return (
    <section id="random" className={randomDiv ? 'latest show' : 'latest hide'}>
      <div className="wrapper">
        <h2 className="medium-title">Random Tropes</h2>
        {data.map((value, index: number) => {
          const uniqueTag = removeDuplicates(value.tag);
          const filteredTag = uniqueTag.filter((item) => tropes.includes(item));
          const arrRandom: number = Math.floor(Math.random() * filteredTag.length);
          return (
            <>
              <p className="trope-description">
                <span className="trope-name">
                  <a href={'/tags/' + filteredTag[arrRandom]}>{filteredTag[arrRandom]}.</a>
                </span>
              </p>
              <div className="random-container">
                <div className="random-book" id="book" key={index}>
                  <a href={'/book/' + value.book_id + '/' + value.title}>
                    <img src={value.img} className="latest-img thumbnail" alt="Book" />
                  </a>
                  <div className="random-block">
                    <h3 className="book-title">
                      <a href={'/book/' + value.book_id + '/' + value.title}>{value.title}</a>
                    </h3>
                    <h3>
                      By{' '}
                      <span className="author-name">
                        <a href={'/author/' + value.author}>{value.author}</a>
                      </span>
                    </h3>
                    <p className="desc">{value.summary}</p>
                    <a href={'/book/' + value.book_id + '/' + value.title} className="more">
                      Read more.
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default RandomTropes;