import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MedicineList from './List';
import Create from './Create';
import Edit from './Edit';
// import { Sidebar } from '../common/Sidebar';

export function MedicineRoutes() {
  return (
    <Routes>
        <Route path="/" element={<MedicineList />} />
        <Route path="/create" element={<Create/>} />
        <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}
