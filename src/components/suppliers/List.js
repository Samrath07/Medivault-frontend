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
import { deleteSupplier, getSuppliers } from '../api/suppliers';

function SupplierList() {
  const [suppliers, setSuppliers] = useState([]);
  const navigate = useNavigate();

  // Fetch customers from the API
  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const supplierList = await getSuppliers();
        setSuppliers(supplierList);
      } catch (error) {
        console.error('Failed to fetch customers:', error);
      }
    };
    fetchSuppliers();
  }, []);

  // Handle delete customer
  const handleDelete = async (supplierId) => {
    try {
      await deleteSupplier(supplierId); // Replace with your API endpoint
      setSuppliers(suppliers.filter((supplier) => supplier.supplier_id !== supplierId));
    //   alert('Customer deleted successfully');
    } catch (error) {
      console.error('Failed to delete customer:', error);
    }
  };

  // Handle edit customer
  const handleEdit = (supplierId) => {
    navigate(`./edit/${supplierId}`);
  };

  return (
    <Box>
      <Header
        label="Add Supplier"
        title="Suppliers"
        onClick={() => navigate('./create')}
      />
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Supplier Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Address</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Contact</TableCell>
              {/* <TableCell sx={{ fontWeight: 700 }}>Category</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Stock Level</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>
                Expiry Date
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }}>
                Price
              </TableCell> */}
              <TableCell sx={{ fontWeight: 700 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suppliers &&
              suppliers.map((supplier) => (
                <TableRow key={supplier.supplier_id}>
                  <TableCell>{supplier.supplier_name}</TableCell>
                  <TableCell>{supplier.address}</TableCell>
                    <TableCell>{supplier.contact}</TableCell>
                  {/* <TableCell>{supplier.category}</TableCell>
                  <TableCell>{supplier.stock_level}</TableCell>
                  <TableCell>{supplier.expiry_date}</TableCell>
                  <TableCell>{supplier.price}</TableCell> */}
                  <TableCell>
                    <IconButton
                      onClick={() => handleEdit(supplier.supplier_id)}
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(supplier.supplier_id)}
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

export default SupplierList;
