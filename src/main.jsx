import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//CCS
import './setting_lib/css/index.css';
// Pges de la APIs
import {Home, Login, Logout,NotFound } from './pages/pages';
//Paginas Privadas
import { Sidebar,Order,Products,Reports,Statistics,Setting,Pagination } from './components/components';

import { AuthProvider } from './context/AuthContext'; // Importa el contexto
import PrivateRoute from './components/PrivateRoute'; // Componente para validar rutas privadas

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <div className='flex' > {/* Contenedor flex para Sidebar y el contenido */}
        <Sidebar/>
        <div className='flex-grow p2 '> {/* Contenedor flex para el contenido espacio restante */}
          <Routes>
            {/* Componentes Publicos */}
            <Route path="/home" element = {<Home/>} />
            <Route path='/login' element = {<Login/>} />
            <Route path="/logout" element={<Logout />} /> {/* Añade la ruta de Logout */}
            <Route path="/products" element={  <Products /> } />
            {/* Componentes Privados */}
            <Route path="/order" element={ <PrivateRoute> <Order /> </PrivateRoute> } />
            <Route path="/products2" element={ <PrivateRoute> <Products /> </PrivateRoute> } />
            <Route path="/Statistics" element={ <PrivateRoute> <Statistics /> </PrivateRoute> } />
            <Route path="/reports" element={ <PrivateRoute> <Reports /> </PrivateRoute> } />
            <Route path="/setting" element={ <PrivateRoute> <Setting /> </PrivateRoute> } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  </BrowserRouter>,
)

