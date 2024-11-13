import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../common/Sidebar';


function DashboardLayout() {
  
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar/>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          mt: 2,
        }}
      >
        <Toolbar />
        <Outlet/>
      </Box>
    </Box>
  );
}

export default DashboardLayout;
