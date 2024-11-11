import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Typography, Container, Box } from '@mui/material';
import { login } from '../api/authentication';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../common/StyledButtons';
// import { useSnackbar } from '../../App';

// Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function Login() {
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        try {
            const { email, password } = values;
            const response = await login(email, password)
            if (response.token) {
                navigate('/dashboard')
            }
        }
        catch (error) {
            console.log('Error', error);
        }


  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
              mt={8}

      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="email"
                as={TextField}
                label="Email"
                fullWidth
                margin="normal"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Field
                name="password"
                as={TextField}
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
             <StyledButton label="Login"/>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default Login;
