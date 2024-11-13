import React from 'react';
import SupplierForm from './Form';
import { createSupplier } from '../api/suppliers';

export function Create() {
  const initialValues = {
    supplier_name: '',
    address: '',
    contact: '',
  };

  const handleSubmit = async (values) => {
    console.log('values', values);
    // Call the API for creation
    try {
      const { supplier_name, address, contact } = values;
      const payload = {
        supplier_name,
        address,
        contact,
      };
      await createSupplier(payload);
    } catch (error) {
      console.log('Error', error);
    }
    // Add create API call here
  };

  return (
    <>
      <h2>Add Supplier </h2>
      <SupplierForm initialValues={initialValues} onSubmit={handleSubmit} />
    </>
  );
}

export default Create;
