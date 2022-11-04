import { useState, useEffect } from 'react';
import axios from 'axios';
import ITrope from '../types/IBook';

function useTropes() {
  const [trope, setTrope] = useState<ITrope[]>([]);

  useEffect(() => {
    async function fetchTrope() {
      const result = await axios.get<{ tropes: ITrope[] }>('/all-tropes');
      setTrope(result.data.tropes);
    }
    fetchTrope();
  }, []);
  return trope;
}

export default useTropes;
