import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import layoutStyles from "./AuthenticatedLayout.module.css";
import SideBar from "./SideBar";

const AuthenticatedRoutes = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={layoutStyles["authenticated-layout"]}>
      <SideBar />
      <main className={layoutStyles["authenticated-layout__main"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthenticatedRoutes;
