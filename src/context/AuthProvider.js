import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useState(null);

  const login = (user) => {
    setIsLoggedin(true);
    setUser(user);
  };

  const logout = () => {
    setIsLoggedin(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ logout, login, isLoggedin, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
