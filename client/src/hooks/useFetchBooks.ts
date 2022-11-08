import { useState, useEffect } from 'react';
import axios from 'axios';
import IBook from '../types/IBook';

function useFetchBooks() {
  const [data, setData] = useState<IBook[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get<{ books: IBook[] }>(`/books`);
      setData(result.data.books);
    }
    fetchData();
  }, []);

  return data;
}

export default useFetchBooks;
