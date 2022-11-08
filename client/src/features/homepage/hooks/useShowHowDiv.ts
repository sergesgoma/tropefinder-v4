import { useEffect, useState } from 'react';

function useShowHowDiv() {
  const [howDiv, setHowDiv] = useState(false);

  const showDiv = () => {
    if (window.scrollY >= 350) {
      setHowDiv(true);
    } else {
      setHowDiv(false);
    }
  };

  useEffect(() => {
    showDiv();
    window.addEventListener('scroll', showDiv);
  }, []);

  return howDiv;
}

export default useShowHowDiv;
