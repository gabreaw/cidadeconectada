import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Complaint from './pages/Complaint';
import ComplaintForm from './pages/ComplaintForm';
import Inicio from './pages/Inicio';
import AdminProfile from './pages/AdminProfile';
import './styles/App.css';
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/complaintForm" element={<ComplaintForm />} />
          <Route path="/adminProfile" element={<AdminProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
