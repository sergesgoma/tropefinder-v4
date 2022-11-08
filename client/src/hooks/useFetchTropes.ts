import { useState, useEffect } from 'react';
import axios from 'axios';
import ITrope from '../types/ITrope';

function useFetchTropes() {
  const [trope, setTrope] = useState<ITrope[]>([]);

  useEffect(() => {
    async function fetchTrope() {
      const result = await axios.get<{ tropes: ITrope[] }>('/all-tropes');
      setTrope(result.data.tropes);
    }
    fetchTrope();
  }, []);

  const filteredTropes = trope.map(function (trope) {
    return trope['trope'];
  });

  return filteredTropes;
}

export default useFetchTropes;
