import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/AuthContext";

 const ProtectedRoute = () => {
    const { isAuth } = useAuth();
    
    return isAuth ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;