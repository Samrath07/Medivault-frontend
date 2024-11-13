import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { getMedicineById, updateMedicine } from '../api/medicines';
import MedicineForm from './Form';

export function Edit() {
    const { id } = useParams();
    const [loadedData, setLoadedData] = useState(false);
    const [medicineDetail, setMedicineDetail] = useState();
  
  useEffect(() => {
      const fetchMedicineData = async () => {
          try {
              setLoadedData(true)
              const medicineData = await getMedicineById(id);
              setMedicineDetail(medicineData);
              setLoadedData(false)
          }
          catch (error) {
              console.log(error);
          }
    };

    fetchMedicineData();
  }, [id]);
    
  const initialValues = {
    medicine_name: medicineDetail && medicineDetail.medicine_name,
    description: medicineDetail && medicineDetail.description,
    brand: medicineDetail && medicineDetail.brand,
    price: medicineDetail && medicineDetail.price,
    category: medicineDetail && medicineDetail.category,
    expiry_date : medicineDetail && medicineDetail.expiry_date,
    stock_level: medicineDetail && medicineDetail.stock_level,

    
  };
    
    // console.log('initial values', initialValues);

    const handleSubmit = async (values) => {
      
        try {
            // Call the API for updating
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
            
            await updateMedicine(id, payload);
            console.log('Updating customer:', values);
        }
        catch (error) {
            console.log('Error', error);
        }
  };

  return (
      <>
    {loadedData && <LinearProgress/>}
      <h2>Edit Medicine</h2>
          {medicineDetail && <MedicineForm initialValues={initialValues} onSubmit={handleSubmit} />}
    </>
  );
}

export default Edit;
