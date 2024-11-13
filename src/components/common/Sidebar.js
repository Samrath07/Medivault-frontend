import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
  } from '@mui/material';
  import InventoryIcon from '@mui/icons-material/Inventory';
  import PeopleIcon from '@mui/icons-material/People';
  import ReceiptIcon from '@mui/icons-material/Receipt';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
  import MedicationIcon from '@mui/icons-material/Medication';
  import { useNavigate, useLocation } from 'react-router-dom';
  
  const sidebarItems = [
    { text: 'Suppliers', icon: <InventoryIcon />, route: './supplier' },
    { text: 'Customers', icon: <PeopleIcon />, route: './customer' },
    { text: 'Orders', icon: <ShoppingCartIcon />, route: './order' },
    { text: 'Prescriptions', icon: <ReceiptIcon />, route: './prescription' },
    { text: 'Medicines', icon: <MedicationIcon />, route: './medicine' },
  ];
  
  const drawerWidth = 240;
  
  export const Sidebar = () => {
    const navigate = useNavigate();
      const location = useLocation();
      console.log('location', location);
  
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <List>
        {sidebarItems.map((item, index) => {
            const isSelected = location.pathname.startsWith(`/dashboard}`);
            console.log('isselected', isSelected);
          return (
            <ListItem
              button
              key={index}
              onClick={() => navigate(item.route)}
              sx={{
                backgroundColor: isSelected ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                '&:hover': {
                  backgroundColor: isSelected ? 'rgba(25, 118, 210, 0.15)' : 'rgba(0, 0, 0, 0.04)',
                },
                cursor: 'pointer',
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          );
        })}
      </List>
      </Drawer>
    );
  };
  