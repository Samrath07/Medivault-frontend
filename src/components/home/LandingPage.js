import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static" sx={{ textTransform: 'none' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Medivault
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
        </Toolbar>
      </AppBar>

      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="80vh"
        >
          <Typography variant="h3" gutterBottom>
            Welcome to Medivault
          </Typography>
          <Typography
            variant="h5"
            color="textSecondary"
            align="center"
            maxWidth="md"
            mb={4}
          >
            A comprehensive solution for managing your pharmacy inventory,
            customers, prescriptions, and orders efficiently.
          </Typography>
          <Button
            onClick={() => navigate('/register')}
            color="primary"
            variant='contained'
            sx={{
              mt: 2,
              p: 2,
              mx: 5,
              textTransform: 'none',
              fontSize: 20,
              width: 300,
            }}
          >
            Sign up
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default LandingPage;
