import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Create from './Create';
import Edit from './Edit';
import CustomerList from './List';
// import { Sidebar } from '../common/Sidebar';

export function CustomerRoutes() {
  return (
    <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}
