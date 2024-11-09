import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Toolbar } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Navbar from '../common/Navbar';
const drawerWidth = 240;

function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemIcon><InventoryIcon /></ListItemIcon>
            <ListItemText primary="Inventory" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ReceiptIcon /></ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
          {/* Add more navigation items here */}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          ml: `${drawerWidth}px`,
          mt: 8,
        }}
      >
        <Toolbar />
        {/* Replace with the actual dashboard content */}
        <h1>Welcome to the Dashboard</h1>
        <p>Here you can manage your inventory, customers, and orders.</p>
      </Box>
    </Box>
  );
}

export default Dashboard;
