import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IBook from '../../../types/IBook';

function useGenre() {
  const [data, setData] = useState<IBook[]>([]);
  const params = useParams();
  const { genre } = params;

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get<{ books: IBook[] }>(`/genre/${genre}`);
      setData(result.data.books);
    }
    fetchData();
  }, [genre]);

  return data;
}

export default useGenre;
