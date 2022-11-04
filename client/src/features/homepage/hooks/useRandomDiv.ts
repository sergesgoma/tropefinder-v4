import { useEffect, useState } from 'react';

function useRandomDiv() {
  const [randomDiv, setRandomDiv] = useState(false);

  const showDiv = () => {
    if (window.scrollY >= 1100) {
      setRandomDiv(true);
    } else {
      setRandomDiv(false);
    }
  };

  useEffect(() => {
    showDiv();
    window.addEventListener('scroll', showDiv);
  }, []);
  
  return randomDiv;
}

export default useRandomDiv;
