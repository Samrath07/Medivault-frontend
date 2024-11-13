import React, { useEffect, useState } from 'react';
import CustomerForm from './Form';
import { useParams } from 'react-router-dom';
import { getCustomerById, updateCustomer } from '../api/customers';
import { LinearProgress } from '@mui/material';

export function Edit() {
    const { id } = useParams();
    const [loadedData, setLoadedData] = useState(false);
    const [customerDetail, setCustomerDetail] = useState();
  
  useEffect(() => {
      const fetchCustomerData = async () => {
          try {
              setLoadedData(true)
              const customerData = await getCustomerById(id);
              console.log('customer--data', customerData);
              setCustomerDetail(customerData);
              setLoadedData(false)
          }
          catch (error) {
              console.log(error);
          }
    };

    fetchCustomerData();
  }, [id]);
    
  const initialValues = {
    first_name: customerDetail && customerDetail.first_name,
    last_name: customerDetail && customerDetail.last_name,
    gender: customerDetail && customerDetail.gender,
    age: customerDetail && customerDetail.age,
    prescription_detail: customerDetail && customerDetail.prescription_detail,
  };
    
    // console.log('initial values', initialValues);
    
  


    const handleSubmit = async (values) => {
      
        try {
            // Call the API for updating
            const { first_name, last_name, gender, age, prescription_detail } = values;
            const payload = {
                first_name,
                last_name,
                gender,
                age,
                prescription_detail
            }
            await updateCustomer(id, payload);
            console.log('Updating customer:', values);
        }
        catch (error) {
            console.log('Error', error);
        }
    // Add update API call here
  };

  return (
      <>
    {loadedData && <LinearProgress/>}
      <h2>Update Customer Details</h2>
          {customerDetail && <CustomerForm initialValues={initialValues} onSubmit={handleSubmit} />}
    </>
  );
}

export default Edit;
