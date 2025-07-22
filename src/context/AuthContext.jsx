import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    // Initial value from localStorage
    return localStorage.getItem("isAuth") === "true";
  });

  useEffect(() => {
    // Listen for changes in localStorage (for multi-tab support)
    const handleStorage = () => {
      setIsAuth(localStorage.getItem("isAuth") === "true");
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const login = () => {
    localStorage.setItem("isAuth", "true");
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
