import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Logout  () {
    const {useAuth} = useAuth();
    const {useNavigate} = useNavigate();

    const handleLogout=() =>{
        logout(); //Llama a la función de logout
        navigate('/home'); // Redirige al usuario a la página de Home
    }

  return (
    <div>
        <div>
            <h1>¿Estás seguro que deseas cerrar sesión?</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    </div>
  )
}

export default Logout;

