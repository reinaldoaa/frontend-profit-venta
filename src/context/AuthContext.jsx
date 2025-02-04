import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  const register = () => setIsAuthenticated(true); // Simulación de registro

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);




/*
// src/AuthContext.js  
import React, { createContext, useContext, useState } from 'react';  

const AuthContext = createContext();  

export const AuthProvider = ({ children }) => {  
  const [isAuthenticated, setIsAuthenticated] = useState(false);  

  const login = () => {  
    setIsAuthenticated(true);  
  };  

  const logout = () => {  
    setIsAuthenticated(false);  
  };  

  return (  
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>  
      {children}  
    </AuthContext.Provider>  
  );  
};  

export const useAuth = () => {  
  return useContext(AuthContext);  
}; 
*/