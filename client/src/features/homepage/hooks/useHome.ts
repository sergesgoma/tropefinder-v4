import { useState, useEffect } from 'react';
import axios from 'axios';
import IBook from '../../../types/IBook';

function useHome() {
  const [data, setData] = useState<IBook[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get<{ books: IBook[] }>('/home');
      setData(result.data.books);
    }
    fetchData();
  }, []);

  return data;
}

export default useHome;