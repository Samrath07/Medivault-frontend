import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Typography, Container, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { register } from '../api/authentication';
import { Link, useNavigate } from 'react-router-dom';
import { StyledButton } from '../common/StyledButtons';

// Validation schema
const RegisterSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
  role: Yup.string().required('Role is required'),
});

function Register() {
    const navigate = useNavigate();
  const handleSubmit = async(values) => {
      // Placeholder for API call
      try {
          const { email, password, role } = values;
          const response = await register(email, password, role);
          if (response.token) {
              navigate('/login');
          }
      }
      catch (error) {
          console.log('error', error);
      }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={8}>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <Formik
          initialValues={{ email: '', password: '', role: '' }}
          validationSchema={RegisterSchema}
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
              <FormControl fullWidth margin="normal" error={touched.role && Boolean(errors.role)}>
                <InputLabel>Role</InputLabel>
                <Field
                  name="role"
                  as={Select}
                  label="Role"
                >
                  <MenuItem value="pharmacist">Pharmacist</MenuItem>
                  <MenuItem value="manager">Inventory Manager</MenuItem>
                </Field>
                {touched.role && errors.role && (
                  <Typography variant="caption" color="error">
                    {errors.role}
                  </Typography>
                )}
              </FormControl>
              <StyledButton label="Register"/>
            </Form>
          )}
        </Formik>
        <Link to='/login'>
        <Typography>Already registered Log in</Typography>
        </Link>
      </Box>
    </Container>
  );
}

export default Register;
