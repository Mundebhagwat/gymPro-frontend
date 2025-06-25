import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    // User not logged in – redirect to login
    return <Navigate to="/signin" replace />;
  }

  return children; // User is authenticated
};

export default ProtectedRoute;
