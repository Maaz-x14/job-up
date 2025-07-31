// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './screens/Registration';
import OTPVerification from './screens/OTP';
import SplashScreenPage from './screens/SplashScreen';
import OnBoarding1 from './screens/OnBoarding1';
import OnBoarding2 from './screens/OnBoarding2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreenPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/boarding1" element={<OnBoarding1 />} />
        <Route path="/boarding2" element={<OnBoarding2 />} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
