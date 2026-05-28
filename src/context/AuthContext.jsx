import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userName, password) => {
    if (userName === "admin" && password === "1234") {
      setUser({ name: "Администратор", role: "admin" });
      return "admin";
    } else if (userName === "manager" && password === "1234") {
      setUser({ name: "Менеджер", role: "manager" });
      return "manager";
    } else if (userName === "user" && password === "1234") {
      setUser({ name: "Анапияев М.И.", role: "user" });
      return "user";
    }
    return null;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
