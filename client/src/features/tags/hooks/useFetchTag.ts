import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IBook from '../../../types/IBook';

function useFetchTag() {
  const [data, setData] = useState<IBook[]>([]);
  const params = useParams();
  const { tag } = params;

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get<{ books: IBook[] }>(`/tags/${tag}`);
      setData(result.data.books);
    }
    fetchData();
  }, [tag]);

  return data;
}

export default useFetchTag;
