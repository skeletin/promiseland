import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UnauthenticatedRoutes = () => {
  const { isAuthenticated } = useAuth();

  // If unauthenticated, render child routes; otherwise go to the app shell (dashboard).
  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default UnauthenticatedRoutes;
