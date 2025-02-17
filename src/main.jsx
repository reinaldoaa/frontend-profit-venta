import React,{ StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import { BrowserRouter,Routes,Route } from 'react-router-dom';
//CCS
import './setting_lib/css/index.css';
// Pges de la APIs
//import {Home, Login, LogOut,NotFound,Register } from './pages/pages';
//Paginas Privadas
//import { Order,Products,Reports,Statistics,Setting } from './components/components';
import App from './App';

//import { AuthProvider } from './context/AuthContext'; // Importa el contexto
//import PrivateRoute from './components/PrivateRoute'; // Componente para validar rutas privadas
//import Main from './components/menu/Main';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/*
//MENU ORIGINAL*********************************************************************************
  <BrowserRouter>
    <AuthProvider>
      <div className='flex' > {/ * Contenedor flex para Sidebar y el contenido * /}
      <Sidebar_debuge/>
      <div className='flex-grow p2 '> {/ * Contenedor flex para el contenido espacio restante * /}
        <Routes>
          {/ * Componentes Publicos * /}
          <Route path="/" element = {<Home/>} />
          <Route path="/home" element = {<Home/>} />
          <Route path='/login' element = {<Login/>} />
          <Route path="/register" element={ <Register /> } />
          {/ * Componentes Privados * /}
          <Route path="/order" element={ <PrivateRoute> <Order /> </PrivateRoute> } />
          <Route path="/products" element={ <PrivateRoute> <Products /> </PrivateRoute> } />
          <Route path="/Statistics" element={ <PrivateRoute> <Statistics /> </PrivateRoute> } />
          <Route path="/reports" element={ <PrivateRoute> <Reports /> </PrivateRoute> } />
          <Route path="/setting" element={ <PrivateRoute> <Setting /> </PrivateRoute> } />
          <Route path="/logout" element={ <PrivateRoute><LogOut /> </PrivateRoute>} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </AuthProvider>
</BrowserRouter>,
*/