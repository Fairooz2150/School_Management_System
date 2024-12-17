import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ role, children }) => {
  const { user } = useSelector((state) => state.auth);
  console.log("ProtectedRoute User Data:", user); // Debug user data

  if (!user || user.role.toLowerCase() !== role.toLowerCase()) {
    return <Navigate to="/" />;
  }

  return children;
};


export default ProtectedRoute;
