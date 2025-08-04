// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/Registration';
import OTPVerification from './pages/OTP';
import SplashScreenPage from './pages/SplashScreen';
import OnBoarding1 from './pages/OnBoarding1';
import OnBoarding2 from './pages/OnBoarding2';
import MainJobPage from './pages/MainJobPage';
import FilterPage from './pages/Filter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreenPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/boarding1" element={<OnBoarding1 />} />
        <Route path="/boarding2" element={<OnBoarding2 />} />
        <Route path="/mainjobpage" element={<MainJobPage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
