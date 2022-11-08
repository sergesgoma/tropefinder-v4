import React from 'react';
import useShowHowDiv from '../../hooks/useShowHowDiv';
import '../../styles/How.css';

const How = () => {
  const howDiv = useShowHowDiv();

  return (
    <section id="how" className={howDiv ? 'how show' : 'how hide'}>
      <div className="wrapper how-wrapper">
        <h2 className="medium-title bb-2">How it works</h2>
        <p className="how-text">
          Merriam-Webster gives a{' '}
          <a
            href="https://www.merriam-webster.com/dictionary/trope"
            target="_blank"
            rel="noopener noreferrer">
            definition
          </a>{' '}
          of "trope" as a "common or overused theme or device". In fiction, a trope is a concept
          that <span className="bold">the audience will recognize and understand instantly.</span>
        </p>
        <p className="how-text">
          It can be a plot trick, a setup, a character trait,{' '}
          <span className="bold blue">you know it when you see it.</span>
        </p>
        <p className="how-text">
          Think: <span className="italic">"everyone has a secret"</span> in thrillers,{' '}
          <span className="italic">"the evil overlord"</span> in fantasy works,{' '}
          <span className="italic">"love triangle"</span> in romance.
        </p>
        <p className="how-text">
          All fictional stories in books, movies, TV series are{' '}
          <span className="bold">full of tropes!</span>
        </p>
        <p className="how-text">
          This website helps you find your next <span className="blue">book crush</span> through a
          trope you love (or love to hate)!
        </p>
      </div>
    </section>
  );
};

export default How;
