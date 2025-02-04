// src/pages/PrivatePage.jsx  
import React from 'react';  
import { useAuth } from '../AuthProvider';  

const PrivatePage = () => {  
  const { user } = useAuth();  

  return (  
    <div>  
      <h1>Página Privada</h1>  
      <p>Bienvenido, {user.username}!</p>  
    </div>  
  );  
};  

export default PrivatePage;  