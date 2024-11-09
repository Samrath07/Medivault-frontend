import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const navigate = useNavigate();
  return (
    <>
      <AppBar position="static" sx={{ margin: 0 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Pharmacy Management System
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate('/about')}>
            About
          </Button>
          <Button color="inherit" onClick={() => navigate('/services')}>
            Services
          </Button>
          <Button color="inherit" onClick={() => navigate('/products')}>
            Products
          </Button>

          <Button color="inherit" onClick={() => navigate('/register')}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
