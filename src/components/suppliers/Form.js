import React from 'react';
import { Formik, Form } from 'formik';
import { TextField, Box } from '@mui/material';
import * as Yup from 'yup';
import { StyledButton } from '../common/StyledButtons';

export default function SupplierForm({ onSubmit }) {
  const initialValues = {
    supplier_name: '',
    address: '',
    contact: '',
  };

  const validationSchema = Yup.object({
    supplier_name: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    contact: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange }) => (
        <Form>
          <Box display="flex" flexDirection="column" gap={2} margin="auto">
            <TextField
              name="supplier_name"
              label="Supplier Name"
              value={values.supplier_name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="address"
              label="Address"
              value={values.address}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="contact"
              label="Contact"
              value={values.contact}
              onChange={handleChange}
              fullWidth
            />

            <StyledButton label="Submit" />
          </Box>
        </Form>
      )}
    </Formik>
  );
}
