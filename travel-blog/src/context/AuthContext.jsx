import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const toogleAuth = () => {
    const newStatus = !loggedIn;
    localStorage.setItem("isLoogedIn", newStatus.toString());
    setLoggedIn(newStatus);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, toogleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
