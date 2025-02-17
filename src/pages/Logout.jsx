import { Container, Typography, Box,Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LogOut  () {
    const { logOut } = useAuth();  // Asegúrate de que 'logout' está correctamente desacoplada
    const [confirmLogOut, setConfirmLogout] = useState(false); // Estado para manejar la confirmación
    const navigate = useNavigate(); // Inicializa el hook navigate

    const handleLogOut=() =>{
      logOut(); // Llama a la función de logOut
      navigate('/home'); // Redirige al usuario a la página de Home
    }
  return (
    <div>
        <Box className=' h-[80vh] py-10 flex justify-center ' sm={{ backgroundColor: '#f5f5f5' }}>
          <Container  maxWidth="sm" className=' w-[100vw] rounded  overflow-y-auto shadow-2xl justify-center items-center gap-8 px-2 ' >
            <Typography component="h1" variant='h5' align="center" sx={{ mb: 2 }}>
              Cerrar Sesión
            </Typography>
              {confirmLogOut ? (
                <div>
{/*                     <h1>¿Estás seguro que deseas cerrar sesión?</h1>
                    <button onClick={handleLogOut}>Cerrar sesión</button>
                    <button onClick={() => setConfirmLogout(false)} >Cancelar</button>
 */}
                    <h1 className='flex flex-auto py-10 text-blue-900 font-bold justify-center '>
                      ¿Estás seguro que deseas cerrar sesión?
                    </h1>
                    <Grid container spacing={1} >
                      <Grid item xs={10}  sm={6}>
                        <Button onClick={handleLogOut} fullWidth variant="contained" color="secondary" >
                          Cerrar sesión
                        </Button>
                      </Grid>
                      <Grid item xs={10}  sm={6}>
                        <Button onClick={() => setConfirmLogout(false)} fullWidth variant="contained" color="info" >
                          Cancelar
                        </Button>
                      </Grid>
                    </Grid>
                </div>
                ) : (
                <div>
                  <h1 className='flex flex-auto py-10 text-fuchsia-950 font-bold justify-center '>¿Estás seguro que deseas cerrar sesión?</h1>
                  {/* <button onClick={() => setConfirmLogout(true)} >Salir </button> */}
                  <Grid item xs={10}  sm={12}>
                    <Button onClick={() => setConfirmLogout(true)}  fullWidth variant="contained" color="secondary" >
                      Salir
                    </Button>
                  </Grid>
                </div>
                )}
          </Container>
        </Box>
    </div>

  )
}
export default LogOut;

