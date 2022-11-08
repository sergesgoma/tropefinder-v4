import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IBook from '../../../types/IBook';

function useFetchAuthor() {
  const [data, setData] = useState<IBook[]>([]);
  const params = useParams();
  const { author } = params;

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get<{ books: IBook[] }>(`/author/${author}`);
      setData(result.data.books);
    }
    fetchData();
  }, [author]);

  return data;
}

export default useFetchAuthor;
