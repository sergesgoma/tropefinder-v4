import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('/home');
      setData(result.data.connected);
    }
    fetchData();
  }, []);
  return data;
};

export default useAuth;
