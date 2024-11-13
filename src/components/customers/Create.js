import React from 'react';
import CustomerForm from './Form';
import { createCustomer } from '../api/customers';
export function Create() {
  const initialValues = {
    first_name: '',
    last_name: '',
    gender: true,
    age: '',
    prescription_detail: '',
  };

  const handleSubmit = async (values) => {
    // Call the API for creation
      try {
          const { first_name, last_name, gender, age, prescription_detail } = values;
          const payload = {
              first_name,
              last_name,
              gender,
              age,
              prescription_detail
          }
          await createCustomer(payload);

      }
      catch (error) {
          console.log("Error", error);
      }
    // Add create API call here
  };

  return (
    <>
      <h2>Create Customer</h2>
      <CustomerForm initialValues={initialValues} onSubmit={handleSubmit} />
    </>
  );
}

export default Create;
