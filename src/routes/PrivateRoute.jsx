import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
export const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
