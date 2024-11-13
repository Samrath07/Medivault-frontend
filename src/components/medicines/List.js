import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Header } from '../common/Header';
import { deleteMedicine, getMedicines } from '../api/medicines';

function MedicineList() {
  const [medicines, setMedicines] = useState([]);
  const navigate = useNavigate();

  // Fetch customers from the API
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const medicineList = await getMedicines();
        setMedicines(medicineList);
      } catch (error) {
        console.error('Failed to fetch customers:', error);
      }
    };
    fetchCustomers();
  }, []);

  // Handle delete customer
  const handleDelete = async (medicineId) => {
    try {
      await deleteMedicine(medicineId); // Replace with your API endpoint
      setMedicines(medicines.filter((medicine) => medicine.medicine_id !== medicineId));
    //   alert('Customer deleted successfully');
    } catch (error) {
      console.error('Failed to delete customer:', error);
    }
  };

  // Handle edit customer
  const handleEdit = (medicineId) => {
    navigate(`./edit/${medicineId}`);
  };

  return (
    <Box>
      <Header
        label="Add Medicine"
        title="Medicines"
        onClick={() => navigate('./create')}
      />
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Medicine Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Brand</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Category</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Stock Level</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>
                Expiry Date
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>
                Price
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medicines &&
              medicines.map((medicine) => (
                <TableRow key={medicine.medicine_id}>
                  <TableCell>{medicine.medicine_name}</TableCell>
                  <TableCell>{medicine.description}</TableCell>
                      <TableCell>{medicine.brand}</TableCell>
                  <TableCell>{medicine.category}</TableCell>
                  <TableCell>{medicine.stock_level}</TableCell>
                  <TableCell>{medicine.expiry_date}</TableCell>
                  <TableCell>{medicine.price}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleEdit(medicine.medicine_id)}
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(medicine.medicine_id)}
                      color="secondary"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MedicineList;
