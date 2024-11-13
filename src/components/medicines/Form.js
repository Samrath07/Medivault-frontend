import React from 'react';
import { Formik, Form } from 'formik';
import { TextField, Box } from '@mui/material';
import * as Yup from 'yup';
import { StyledButton } from '../common/StyledButtons';

export default function MedicineForm({ initialValues, onSubmit }) {
  const validationSchema = Yup.object({
    medicine_name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    brand: Yup.string().required('Required'),
    price: Yup.number().required('Required').min(0),
    category: Yup.string().required('Required'),
    expiry_date: Yup.date().required('Required'),
    stock_level: Yup.number().required('Required').min(0),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, handleChange }) => (
        <Form>
          <Box>
            {/* <p>{JSON.stringify(values, errors)}</p> */}
          </Box>
          <Box display="flex" flexDirection="column" gap={2} margin="auto">
            <TextField
              name="medicine_name"
              label="Medicine Name"
              value={values.medicine_name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="description"
              label="Description"
              value={values.description}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="brand"
              label="Brand"
              value={values.brand}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="price"
              label="Price"
              type="number"
              value={values.price}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="category"
              label="Category"
              value={values.category}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="expiry_date"
              label="Expiry Date"
              type="date"
              value={values.expiry_date}
              onChange={handleChange}
              // InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField
              name="stock_level"
              label="Stock Level"
              type="number"
              value={values.stock_level}
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
