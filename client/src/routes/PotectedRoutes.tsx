import React from 'react';
import { Outlet } from 'react-router';
import useAuth from '../hooks/useAuth';
import Login from '../pages/authentification/Login';

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
