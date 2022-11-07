import { useState, useEffect } from 'react';
import axios from 'axios';
import IBookRecs from '../../../types/IBookRecs';
import IBook from '../../../types/IBook';

function useRecs({ book_id, title }: IBookRecs) {
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`/book/${book_id}/${title}`);
      setRecs(result.data.recs);
    }
    fetchData();
  }, [book_id, title]);

  let arr: IBook[] = [];

  for (let i = 0; i < recs.length; i++) {
    if (recs[i]['book_id'] !== book_id) {
      arr.push(recs[i]);
    }
  }

  return arr;
}

export default useRecs;
