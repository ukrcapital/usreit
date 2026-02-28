import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Layout from './components/Layout';
import { AuthProvider, useAuth } from './context/AuthContext';
import { HomeBgProvider } from './context/HomeBgContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import DashboardDocsPage from './pages/DashboardDocsPage';
import HandbookReitInzurPage from './pages/HandbookReitInzurPage';
import ContactPagePage from './pages/ContactPagePage';
import ReferralDescriptionPage from './pages/ReferralDescriptionPage';
import ReferralPage from './pages/ReferralPage';
import InzhurDevelpoPage from './pages/InzhurDevelpoPage';
import InzhurEnergyPage from './pages/InzhurEnergyPage';

function ProtectedDashboard() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return <Navigate to="/account" replace />;
  return <Outlet />;
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <HomeBgProvider>
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="account" element={<LoginPage />} />
            <Route path="handbook" element={<HandbookReitInzurPage />} />
            <Route path="contacts" element={<ContactPagePage />} />
            <Route path="referral" element={<ReferralDescriptionPage />} />
            <Route path="us" element={<HomePage />} />
            <Route path="developer" element={<InzhurDevelpoPage />} />
            <Route path="energy" element={<InzhurEnergyPage />} />
            <Route path="dashboard" element={<ProtectedDashboard />}>
              <Route index element={<DashboardPage />} />
              <Route path="documents" element={<DashboardDocsPage />} />
              <Route path="referral" element={<ReferralPage />} />
            </Route>
          </Route>
          </Routes>
        </HomeBgProvider>
      </AuthProvider>
    </Router>
  );
}