import React, { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext();

/**
  * @function AuthProvider
  * @description Funcion Valida el Inicio de Sesión y Salida
  * @param {userData}: Un objeto JSON con la informacion del Usuario y El Token
 */
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userAuth,setUserAuth] = useState(null);

  // Intenta recuperar los datos del usuario al cargar el componente
  useEffect(() => {
  const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserAuth(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData) => {
    setUserAuth(userData[1].user); // Actualiza el usuario logueado
    setIsAuthenticated(true);
    //console.log(`AuthContext userAuth :`,userAuth);
    localStorage.setItem('authToken', JSON.stringify(userData[0].token)); // Almacena el token JWT
    localStorage.setItem('user', JSON.stringify(userData[1].user)); // Asegúrate de almacenar los datos del usuario si los necesitas
  };

  const logOut = () => {
    setIsAuthenticated(false);
    setUserAuth(null);
    localStorage.removeItem('authToken'); // Elimina el token
    localStorage.removeItem('user'); // Elimina los datos del usuario Logeado
  }
  const register = () => setIsAuthenticated(false); // Simulación de registro

    return (
        <AuthContext.Provider value={{ isAuthenticated,userAuth, login, logOut, register }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
