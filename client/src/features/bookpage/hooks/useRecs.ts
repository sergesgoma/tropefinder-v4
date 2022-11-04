import { useState, useEffect } from 'react';
import axios from 'axios';
import IBookRecs from '../../../types/IBookRecs';

function useRecs({ book_id, title }: IBookRecs) {
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`/book/${book_id}/${title}`);
      setRecs(result.data.recs);
    }
    fetchData();
  }, [book_id, title]);

  return recs;
}

export default useRecs;
