import React from 'react';
import MedicineForm from './Form';
import { createMedicine } from '../api/medicines';

export function Create() {
  const initialValues = {
    medicine_name: '',
    description: '',
    brand: '',
    price: 0,
    category: '',
    expiry_date: '',
    stock_level: 0,
  };

  const handleSubmit = async (values) => {
    console.log('values', values);
    // Call the API for creation
    try {
      const {
        medicine_name,
        description,
        brand,
        price,
        category,
        expiry_date,
        stock_level,
      } = values;
      const payload = {
        medicine_name,
        description,
        brand,
        price,
        category,
        expiry_date,
        stock_level,
      };
      await createMedicine(payload);
    } catch (error) {
      console.log('Error', error);
    }
    // Add create API call here
  };

  return (
    <>
      <h2>Add Medicine </h2>
      <MedicineForm initialValues={initialValues} onSubmit={handleSubmit} />
    </>
  );
}

export default Create;
