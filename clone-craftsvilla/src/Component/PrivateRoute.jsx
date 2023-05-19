import { useContext } from "react";
import { AuthContext } from "./context/AuthContextProvider";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
  const { IsAuth } = useContext(AuthContext);
  if (!IsAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default PrivateRoute;