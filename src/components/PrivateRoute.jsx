import { Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

/*
*  @description (PrivateRoute): Componentes
*  @Param {children}: componente hijo
*/
function PrivateRoute( {children} ) {
    const { isAuthenticated } = useAuth();
  return  isAuthenticated ? children : <Navigate to = '/login' />;
}

export default PrivateRoute;

