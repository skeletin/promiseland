import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UnauthenticatedRoutes = () => {
  const { isAuthenticated } = useAuth();

  // If Unauthenticated, render child routes (via <Outlet />), otherwise navigate to /learn
  return !isAuthenticated ? <Outlet /> : <Navigate to="/learn" replace />;
};

export default UnauthenticatedRoutes;
