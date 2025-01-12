import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("token"); // Check if authenticated

  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />; // Render the protected route if authenticated
};

export default ProtectedRoute;
