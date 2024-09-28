import { createContext, useState } from "react";

export const AuthContext = createContext();

import React from "react";

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAuthenticated = ()=>{
    if(email && password != null) return false;
    else return true;
  }

  return (
    <AuthContext.Provider
      value={{ username, setUsername, email, setEmail, password, setPassword, isAuthenticated}}
    >
      {children}
    </AuthContext.Provider>
  );
};
