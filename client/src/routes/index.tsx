import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homepage';
import BookPage from '../pages/bookpage';
import AllTropes from '../pages/tagpages/AllTropes';
import Author from '../pages/tagpages/Author';
import Genre from '../pages/tagpages/Genre';
import Search from '../pages/tagpages/Search';
import Series from '../pages/tagpages/Series';
import Tag from '../pages/tagpages/Tag';
import Signup from '../pages/authentification/Signup';
import Login from '../pages/authentification/Login';
import Wishlist from '../features/wishlist/components/Wishlist';
import AddReview from '../features/reviews/components/AddReview';
import EditReview from '../features/reviews/components/EditReview';
import ProtectedRoutes from './PotectedRoutes';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-tropes" element={<AllTropes />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/">
          <Route index element={<BookPage />} />
          <Route path="/book/:book_id/:title" element={<BookPage />} />
        </Route>
        <Route path="/tags/:tag" element={<Tag />} />
        <Route path="/tag" element={<Search />} />
        <Route path="/author/:author" element={<Author />} />
        <Route path="/genre/:genre" element={<Genre />} />
        <Route path="/series/:series" element={<Series />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/book/:book_id/:title/write-review" element={<AddReview />} />
          <Route path="/book/:book_id/:title/edit-review" element={<EditReview />} />
        </Route>
        <Route path="/books" />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
