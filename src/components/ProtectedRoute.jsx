// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const authToken = localStorage.getItem('authToken');

//   if (!authToken) {
//     // User not logged in – redirect to login
//     return <Navigate to="/signin" replace />;
//   }

//   return children; // User is authenticated
// };

// export default ProtectedRoute;



import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isTokenValid, getUserRoleFromToken } from '../utils/auth';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const location = useLocation();

  const validToken = isTokenValid();
  const userRole = getUserRoleFromToken();

  if (!validToken) {
    localStorage.clear(); // clean old data
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
