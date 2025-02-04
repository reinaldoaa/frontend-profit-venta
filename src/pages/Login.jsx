import { Container, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState , useEffect} from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

//import { useState, useRef, useContext } from "react";
function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [rol,setRol] = useState('');
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);
    const {login} = useAuth();
    const navigate = useNavigate(); // Inicializa el hook navigate

    //Cabezera de la consulta
    const header = {
        method:"POST",
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password, rol }) // Envía los datos de inicio de sesión
      };

    // Efecto para hacer fetch (no lo necesitas en tu caso de uso actual)
    useEffect ( ()=> {
        setLoading(false); // Suponiendo que no hay datos iniciales
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password: ', password);
        console.log('Rol: ', rol);
        //LLama a la API de Autentificacion
        fetch('http://localhost:8000/login',header)
        .then ( (response)=> {
            if (!response.ok) {
                console.log(response);
                throw new Error("Error en la Autentificacion"); //Maneja error
            }
            return response.json(),400;
        })
        .then( (data)=> {
            // Manejar los datos de respuesta aquí (Establecer JWT, redirigir, etc.)
            login(); // Llama a la función de login
            console.log("Respuesta de la API",data);
            navigate('/products'); //Redirijo a la pagina principal
        })
        .catch( (error)=> {
            console.log('Error:', error);
            setError(error.message);
        });

    };
    return (
    <div className='h-[100vh] py-10 px-10 flex justify-center'>
        <Container className='w-[65vw] rounded overflow-hidden shadow-2xl justify-center items-center gap-8 px-2'>
            <Typography component="h1" variant='h5'>
                Iniciar Sesión
            </Typography>
            {error && <p className= ' bg-red-500 text-yellow-50  text-center '>{error}</p> } {/* Muestra mensaje de error */}
            <form>
                <TextField margin='normal'
                    required
                    fullWidth
                    label='Usuario/Correo'
                    type='text'
                    autoFocus
                    value={username}
                    onChange = { (e)=> setUsername(e.target.value)}/>
                <TextField margin='normal'
                    required
                    fullWidth
                    label='Contraseña'
                    type='password'
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}
                />
                <FormControl fullWidth margin='normal' requerid>
                    <InputLabel id='rol-label'>Rol</InputLabel>
                    <Select labelId='rol-label'
                        value={rol}
                        onChange = {(e)=> setRol(e.target.value)}
                    >
                        <MenuItem value='ADMIN'>ADMINISTRADOR</MenuItem>
                        <MenuItem value='CLIENT'>CLIENTE</MenuItem>
                        <MenuItem value='VEND'>VENDEDOR</MenuItem>
                        <MenuItem value='SUPER'>SUPERVISOR DE VENTA</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleSubmit}>
                    Iniciar Sesión
                </Button>
            </form>
        </Container>
    </div>
  )
}
export default Login;

