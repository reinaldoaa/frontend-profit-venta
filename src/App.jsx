import React from 'react';
//import { createRoot } from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// Pges de la APIs
import { Home,Login, LogOut,NotFound,Register } from './pages/pages';
//Paginas Privadas
import { Sidebar,Main,Order,Products,Reports,Statistics,Setting } from './components/components';
import { AuthProvider } from './context/AuthContext'; // Importa el contexto
import PrivateRoute from './components/PrivateRoute'; // Componente para validar rutas privadas

function App() {
  return (
    <>
      <main className='w-full bg-slate-200 h-screen flex justify-between items-start font-oswald font-normal'>
        <BrowserRouter>
          <AuthProvider>
            <Sidebar/>
            <Routes>
              <Route path="/" element = {<Main />} >
                {/* Componentes Publicos */}
                <Route index element = {<Home/>} />
                <Route path="/home" element = {<Home/>} />
                <Route path='/login' element = {<Login/>} />
                <Route path="/register" element={ <Register /> } />
                {/* Componentes Privados */}
                <Route path="/order" element={ <PrivateRoute> <Order /> </PrivateRoute> } />
                <Route path="/products" element={ <PrivateRoute> <Products /> </PrivateRoute> } />
                <Route path="/Statistics" element={ <PrivateRoute> <Statistics /> </PrivateRoute> } />
                <Route path="/reports" element={ <PrivateRoute> <Reports /> </PrivateRoute> } />
                <Route path="/setting" element={ <PrivateRoute> <Setting /> </PrivateRoute> } />
                <Route path="/logout" element={ <PrivateRoute><LogOut /> </PrivateRoute>} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>,
      </main>
    </>
  )
}

export default App;
