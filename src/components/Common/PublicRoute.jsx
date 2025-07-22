import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/AuthContext";

const PublicRoute = () => {
  const { isAuth } = useAuth();
  return !isAuth ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoute;