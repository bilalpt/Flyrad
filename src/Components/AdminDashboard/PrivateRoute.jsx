import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('authToken'); // Check if the user is authenticated

  return token ? element : <Navigate to="/AdminLoginPage" />;
};

export default PrivateRoute;
