import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserManagementPage from './pages/UserManagementPage';
import DashboardPage from './pages/DashboardPage';
// import ForgotPasswordPage from './pages/ForgotPasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-management" element={<UserManagementPage />} />
        {/* <Route path="/forgotpassword" element={<ForgotPasswordPage />} /> */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
