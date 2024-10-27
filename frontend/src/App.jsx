import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Complaint from './pages/Complaint';
import Inicio from './pages/Inicio';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/complaint" element={<Complaint />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
