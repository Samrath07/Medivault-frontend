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
import { getCustomers, deleteCustomer } from '../api/customers';
import { Header } from '../common/Header';

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  // Fetch customers from the API
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customersList = await getCustomers();
        setCustomers(customersList);
      } catch (error) {
        console.error('Failed to fetch customers:', error);
      }
    };
    fetchCustomers();
  }, []);

  // Handle delete customer
  const handleDelete = async (customerId) => {
    try {
      await deleteCustomer(customerId); // Replace with your API endpoint
      setCustomers(customers.filter((customer) => customer.id !== customerId));
      alert('Customer deleted successfully');
    } catch (error) {
      console.error('Failed to delete customer:', error);
    }
  };

  // Handle edit customer
  const handleEdit = (customerId) => {
    navigate(`./edit/${customerId}`);
  };

  return (
    <Box>
      <Header
        label="Add Customer"
        title="Customers"
        onClick={() => navigate('./create')}
      />
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>First Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Last Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Gender</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Age</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>
                Prescription Detail
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers &&
              customers.map((customer) => (
                <TableRow key={customer.customer_id}>
                  <TableCell>{customer.first_name}</TableCell>
                  <TableCell>{customer.last_name}</TableCell>
                  <TableCell>{customer.gender ? 'Male' : 'Female'}</TableCell>
                  <TableCell>{customer.age}</TableCell>
                  <TableCell>{customer.prescription_detail}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleEdit(customer.customer_id)}
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(customer.customer_id)}
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

export default CustomerList;
