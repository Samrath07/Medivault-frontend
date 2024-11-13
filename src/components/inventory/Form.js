import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, TextField } from '@mui/material';
import * as Yup from 'yup';

const InventoryForm = ({ onSubmit }) => {
  const initialValues = {
    medicine: {
      medicine_name: '',
      description: '',
      brand: '',
      price: 0,
      category: '',
      expiry_date: '',
      stock_level: 0,
    },
    stock_level: 0,
    reorder_level: 0,
  };

  const validationSchema = Yup.object({
    medicine: Yup.object({
      medicine_name: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      brand: Yup.string().required('Required'),
      price: Yup.number().required('Required').min(0),
      category: Yup.string().required('Required'),
      expiry_date: Yup.date().required('Required'),
      stock_level: Yup.number().required('Required').min(0),
    }),
    stock_level: Yup.number().required('Required').min(0),
    reorder_level: Yup.number().required('Required').min(0),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form>
          <Field name="medicine.medicine_name" as={TextField} label="Medicine Name" error={touched.medicine?.medicine_name && !!errors.medicine?.medicine_name} helperText={touched.medicine?.medicine_name && errors.medicine?.medicine_name} fullWidth />
          <Field name="medicine.description" as={TextField} label="Description" fullWidth />
          <Field name="medicine.brand" as={TextField} label="Brand" fullWidth />
          <Field name="medicine.price" as={TextField} label="Price" type="number" fullWidth />
          <Field name="medicine.category" as={TextField} label="Category" fullWidth />
          <Field name="medicine.expiry_date" as={TextField} label="Expiry Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
          <Field name="medicine.stock_level" as={TextField} label="Stock Level" type="number" fullWidth />
          <Field name="stock_level" as={TextField} label="Inventory Stock Level" type="number" fullWidth />
          <Field name="reorder_level" as={TextField} label="Reorder Level" type="number" fullWidth />
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default InventoryForm;
