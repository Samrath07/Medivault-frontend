import React from 'react';
import { Formik, Form } from 'formik';
import { TextField, MenuItem, Box } from '@mui/material';
import * as Yup from 'yup';
import { StyledButton } from '../common/StyledButtons';

const validationSchema = Yup.object({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  gender: Yup.boolean().required('Gender is required'),
  age: Yup.number()
    .required('Age is required')
    .min(1, 'Age must be at least 1')
    .max(120, 'Age must be less than or equal to 120'),
  prescription_detail: Yup.string().required(
    'Prescription details are required'
  ),
});

export default function CustomerForm({ initialValues, onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange }) => (
        <Box>
          {/* <p>{JSON.stringify(values)}</p> */}
          <Form>
            <Box display="flex" flexDirection="column" gap={2} margin="auto">
              <TextField
                label="First Name"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                error={touched.first_name && Boolean(errors.first_name)}
                helperText={touched.first_name && errors.first_name}
                fullWidth
              />

              <TextField
                label="Last Name"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                error={touched.last_name && Boolean(errors.last_name)}
                helperText={touched.last_name && errors.last_name}
                fullWidth
              />

              <TextField
                select
                label="Gender"
                name="gender"
                value={values.gender}
                onChange={handleChange}
                error={touched.gender && Boolean(errors.gender)}
                helperText={touched.gender && errors.gender}
                fullWidth
              >
                <MenuItem value={true}>Male</MenuItem>
                <MenuItem value={false}>Female</MenuItem>
              </TextField>

              <TextField
                label="Age"
                name="age"
                type="number"
                value={values.age}
                onChange={handleChange}
                error={touched.age && Boolean(errors.age)}
                helperText={touched.age && errors.age}
                fullWidth
              />

              <TextField
                label="Prescription Detail"
                name="prescription_detail"
                value={values.prescription_detail}
                onChange={handleChange}
                error={
                  touched.prescription_detail &&
                  Boolean(errors.prescription_detail)
                }
                helperText={
                  touched.prescription_detail && errors.prescription_detail
                }
                multiline
                rows={2}
                fullWidth
              />

              {/* <Button type="submit" variant="contained" color="primary">
              Submit
            </Button> */}
              <StyledButton label="Submit" />
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  );
}
