import { createContext, useState } from "react";
export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [IsAuth, setIsAuth] = useState(false);
  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider value={{ IsAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
