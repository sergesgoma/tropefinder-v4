import { useState, useEffect } from 'react';

function useLoader() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return loader;
}

export default useLoader;
