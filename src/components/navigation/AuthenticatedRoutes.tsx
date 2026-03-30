import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AuthenticatedRoutes = () => {
  const { isAuthenticated } = useAuth();

  // If authenticated, render child routes (via <Outlet />), otherwise navigate to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default AuthenticatedRoutes;
