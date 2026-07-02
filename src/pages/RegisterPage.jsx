import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  Link,
  MenuItem,
  Grid,
} from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { extractErrorMessage } from '../api/apiError';

const tiposDoc = [
  { value: 'CC', label: 'Cédula de ciudadanía' },
  { value: 'CE', label: 'Cédula de extranjería' },
  { value: 'TI', label: 'Tarjeta de identidad' },
];

const vacio = {
  nombre: '',
  email: '',
  password: '',
  tipoDoc: 'CC',
  nroDoc: '',
};

export default function RegisterPage() {
  const [form, setForm] = useState(vacio);
  const [error, setError] = useState('');
  const [exito, setExito] = useState(false);
  const [cargando, setCargando] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (campo) => (e) =>
    setForm({ ...form, [campo]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    setCargando(true);

    try {
      await register(form);
      setExito(true);
      setTimeout(() => navigate('/login'), 1200);
    } catch (err) {
      setError(
        extractErrorMessage(err, 'No se pudo completar el registro.')
      );
    } finally {
      setCargando(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        px: 2,
        py: 4,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 5,
          width: 500,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" sx={{ mb: 0.5, color: 'primary.main' }}>
          Crear cuenta
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Regístrate para acceder al panel de LaTienda.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {exito && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Cuenta creada. Redirigiendo a inicio de sesión...
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Tipo de documento */}
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Tipo"
                fullWidth
                required
                value={form.tipoDoc}
                onChange={handleChange('tipoDoc')}
              >
                {tiposDoc.map((t) => (
                  <MenuItem key={t.value} value={t.value}>
                    {t.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Número de documento */}
            <Grid item xs={12} sm={8}>
              <TextField
                label="Número de documento"
                fullWidth
                required
                value={form.nroDoc}
                onChange={handleChange('nroDoc')}
              />
            </Grid>

            {/* Nombre */}
            <Grid item xs={12}>
              <TextField
                label="Nombre completo"
                fullWidth
                required
                value={form.nombre}
                onChange={handleChange('nombre')}
              />
            </Grid>

            {/* Correo */}
            <Grid item xs={12}>
              <TextField
                label="Correo electrónico"
                type="email"
                fullWidth
                required
                value={form.email}
                onChange={handleChange('email')}
              />
            </Grid>

            {/* Contraseña */}
            <Grid item xs={12}>
              <TextField
                label="Contraseña"
                type="password"
                fullWidth
                required
                value={form.password}
                onChange={handleChange('password')}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={cargando}
            sx={{ mt: 3, mb: 2 }}
          >
            {cargando ? 'Creando cuenta...' : 'Registrarme'}
          </Button>

          <Typography variant="body2" align="center">
            ¿Ya tienes cuenta?{' '}
            <Link component={RouterLink} to="/login" color="secondary">
              Inicia sesión
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}