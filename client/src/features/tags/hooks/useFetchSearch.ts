import { useState, useEffect } from 'react';
import axios from 'axios';
import IBook from '../../../types/IBook';
import { query } from '../components/SearchPage';

function useFetchSearch() {
  const [data, setData] = useState<IBook[]>([]);

  useEffect(() => {
    async function fetchData() {
      const search = String(query[0]);
      const result = await axios.get<{ books: IBook[] }>(`/tag?search=${search},`);
      setData(result.data.books);
    }
    fetchData();
  }, []);

  return data;
}

export default useFetchSearch;
