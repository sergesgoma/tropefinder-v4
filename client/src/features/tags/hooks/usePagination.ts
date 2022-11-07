import { useState } from 'react';

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 20;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  return { firstPostIndex, postsPerPage, lastPostIndex, currentPage, setCurrentPage };
};

export default usePagination;
