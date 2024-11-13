import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/home/LandingPage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import DashboardLayout from './components/dashboard/Dashboard';
import { CustomerRoutes } from './components/customers/routes';
import { MedicineRoutes } from './components/medicines/routes';
import { SupplierRoutes } from './components/suppliers/routes';


export default function RouterMain() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="customer/*" element={<CustomerRoutes />} />
        {/* Add other routes here */}
        <Route path="medicine/*" element={<MedicineRoutes />} />
        <Route path="supplier/*" element={<SupplierRoutes />} />
        {/* <Route path="inventory/*" element={<InventoryRoutes />} /> */}
      </Route>
      </Routes>
    </>
  );
}
