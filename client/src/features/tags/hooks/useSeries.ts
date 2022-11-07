import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IBook from '../../../types/IBook';

function useSeries() {
  const [data, setData] = useState<IBook[]>([]);
  const params = useParams();
  const { series } = params;

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get<{ books: IBook[] }>(`/series/${series}`);
      setData(result.data.books);
    }
    fetchData();
  }, [series]);

  return data;
}

export default useSeries;
