import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IBook from '../../../types/IBook';

function useBookPage() {
  const [data, setData] = useState<IBook[]>([]);
  const params = useParams();
  const { book_id, title } = params;

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get<{ books: IBook[] }>(`/book/${book_id}/${title}`);
      setData(result.data.books);
    }
    fetchData();
  }, [book_id, title]);

  return data;
}

export default useBookPage;
