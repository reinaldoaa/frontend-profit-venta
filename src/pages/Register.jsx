import { Container, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { register } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name_client, setName_client] = useState('');
    const [cedula_rif, setCedula_rif] = useState('');
    const [telefonos, setTelefonos] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');

    useEffect(() => {
        setLoading(false);
    }, []);

    const handleRegister = (e) => {
        e.preventDefault();
        const header = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, rol,email,name_client,cedula_rif,telefonos,nacionalidad }) // Envía los datos para registrar al cliente
        };
        //fetch('http://localhost:8000/register', header)
        fetch(`${import.meta.env.VITE_API_URL}/register`, header)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error en el Registro");
                }
                return response.json();
            })
            .then(data => {
                register();
                // navigate('/products');
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <Box className=' h-[100vh] py-10 flex justify-center ' sx={{ backgroundColor: '#f5f5f5' }}>
            <Container  maxWidth="sm" className=' w-[100vw] rounded  overflow-y-auto shadow-2xl justify-center items-center gap-8 px-2 '  >
                <Typography component="h1" variant='h5' align="center" sx={{ mb: 2 }}>
                    Registrarse
                </Typography>
                {error && <Typography variant='body2' color='error' align='center'>{error}</Typography>}
                <form onSubmit={handleRegister}>
                    <Grid container spacing={1} >
                        <Grid item xs={10}  sm={6}>
                            <TextField required label='Usuario/Login' fullWidth value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </Grid>
                        <Grid item xs={10} sm={6}>
                            <TextField required label='Password' type='password' fullWidth value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </Grid>
                        <Grid item xs={10} sm={6}>
                            <TextField required label='Correo' fullWidth value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </Grid>
                        <Grid item xs={10} sm={6}>
                            <TextField required label='Nombre y Apellido de Cliente' fullWidth value={name_client}
                                onChange={(e) => setName_client(e.target.value)}/>
                        </Grid>
                        <Grid item xs={10} sm={6}>
                            <FormControl fullWidth required>
                                <InputLabel id='nacionalidad-label'>Nacionalidad</InputLabel>
                                <Select labelId='nacionalidad-label' value={nacionalidad}
                                    onChange={(e) => setNacionalidad(e.target.value)}
                                >
                                    <MenuItem value='V'>VENEZOLANO</MenuItem>
                                    <MenuItem value='E'>EXTRANJERO</MenuItem>
                                    <MenuItem value='J'>JURIDICO</MenuItem>
                                    <MenuItem value='G'>GUBERNAMENTAL</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={10} sm={6}>
                            <TextField required label='Cédula o RIF' fullWidth value={cedula_rif}
                                onChange={(e) => setCedula_rif(e.target.value)}/>
                        </Grid>
                        <Grid item xs={10} sm={6}>
                            <TextField required label='Teléfonos' fullWidth value={telefonos}
                                onChange={(e) => setTelefonos(e.target.value)}/>
                        </Grid>
                        <Grid item xs={10} sm={6}>
                            <FormControl fullWidth required>
                                <InputLabel id='rol-label'>Rol</InputLabel>
                                <Select  labelId='rol-label' value={rol}
                                    onChange={(e) => setRol(e.target.value)}>
                                    <MenuItem value='ADMIN'>ADMINISTRADOR</MenuItem>
                                    <MenuItem value='CLIENT'>CLIENTE</MenuItem>
                                    <MenuItem value='VEND'>VENDEDOR</MenuItem>
                                    <MenuItem value='SUPER'>SUPERVISOR DE VENTA</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}  sm={12}>
                            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }} >
                                Registrarse
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
};

export default Register;
