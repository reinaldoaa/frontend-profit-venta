import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex"> {/* Contenedor flex para Sidebar y el contenido */}
        <Sidebar/>
        <div className="flex-grow p-4"> {/* Esta clase hace que el contenido ocupe el espacio restante */}
          <Routes>
            {/* Componentes Publicos */}
            <Route path="/home" element={<Home/>} />
            {/* Componentes Privados */}
            <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
      </div>
      </>
  )
}

export default App
