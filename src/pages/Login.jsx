import { Container, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState , useEffect} from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [rol,setRol] = useState('');
    const [error,setError] = useState(null);
    const {login} = useAuth();
    const navigate = useNavigate(); // Inicializa el hook navigate
    const [loading, setLoading] = useState(false);

    const handleLogin  = (e) => {
        e.preventDefault();
        setError(null); // Limpiar errores anteriores
        setLoading(true); // Activar el indicador de carga
        //Cabezera de la consulta
        const header = {
            method:"POST",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify({ username, password, rol }) // Envía los datos de inicio de sesión
        };
        //fetch('http://localhost:8000/login',header)
        fetch(`${import.meta.env.VITE_API_URL}/login`,header) //LLama a la API de Autentificacion
        .then ( (response)=> {
            //console.log(response);
            setLoading(false); // Desactivar el indicador de carga
            if (!response.ok) {
                /*return response.text().then (errorText=> { // Usar response.text()
                    console.error("Error Response !response.ok: ",errorText );
                    return Promise.reject(`Error en la Autentificación: ${errorText}`); // Incluir el mensaje del backend
                });*/
                return response.text().then(errorText => {
                    console.error("Error Response !response.ok: ", errorText);
                    return Promise.reject(`Error en la Autentificación: ${errorText}`);
                });              }
            return response.json();
        })
        .then( (data)=> {
            login( data ); // Llama a la función de login
            //console.log(JSON.stringify(data[1].user)); // Llama a la función de login
            navigate('/products'); //Redirijo a la pagina principal Home
        })
        .catch( (error)=> {
            setLoading(false); // Desactivar el indicador de carga
            console.log('Error:', error); // Llama a la función de login
            setError(error.message);
        });
    };

    const handleRegister = (e) => {

    }

    return (
        <Box className=' h-[80vh] py-10 flex justify-center ' sm={{ backgroundColor: '#f5f5f5' }}>
            <Container  maxWidth="sm" className=' w-[100vw] rounded  overflow-y-auto shadow-2xl justify-center items-center gap-8 px-2 ' >
                <Typography component="h1" variant='h5' align="center" sx={{ mb: 2 }}>
                    Iniciar Sesión
                </Typography>
                {error && <Typography variant='body2' color='error' align='center'>{error}</Typography>}
                <form onSubmit={handleLogin} >
                    <Grid container spacing={1} >
                        <Grid item xs={10}  sm={12}>
                            <TextField margin='normal' required fullWidth label='Usuario/Correo' type='text' autoFocus
                            value={username} onChange = { (e)=> setUsername(e.target.value)} inputProps={{ autoComplete: 'username' }}/>
                        </Grid>
                        <Grid item xs={10}  sm={12}>
                            <TextField margin='normal' required fullWidth label='Contraseña' type='password'
                            value={password} onChange={ (e) => setPassword(e.target.value)} inputProps={{ autoComplete: 'current-password' }}  />
                        </Grid>
                        <Grid item xs={10}  sm={12}>
                            <FormControl fullWidth margin='normal' required>
                            <InputLabel id='rol-label'>Rol</InputLabel>
                            <Select labelId='rol-label' value={rol} onChange = {(e)=> setRol(e.target.value)}>
                                <MenuItem value='ADMIN'>ADMINISTRADOR</MenuItem>
                                <MenuItem value='CLIENT'>CLIENTE</MenuItem>
                                <MenuItem value='VEND'>VENDEDOR</MenuItem>
                                <MenuItem value='SUPER'>SUPERVISOR DE VENTA</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={10}  sm={12}>
                            <Button type="submit" fullWidth variant="contained" color="primary" >
                            Iniciar Sesión
                            </Button>
                        </Grid>
                        <Grid item xs={10} sm={12} display="flex" justifyContent="center" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                ¿No tienes una cuenta?
                                <Button onClick={() => navigate('/register')} color="primary" sx={{ ml: 1 }}>
                                    Regístrate
                                </Button>
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Box>
  )
}
export default Login;

