import React, { useEffect, useState } from 'react';
import NoInternet from '../components/NoInternet';
import { useNavigate } from 'react-router-dom';

const SplashScreenPage = () => {
  const [hasInternet, setHasInternet] = useState(true);
  const navigate = useNavigate();

  const checkConnection = async () => {
    try {
      const online = navigator.onLine;
      if (online) {
        setHasInternet(true);
        setTimeout(() => {
          navigate('/register');
        }, 2000);
      } else {
        setHasInternet(false);
      }
    } catch {
      setHasInternet(false);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#5D28F4] to-[#8B6DFD] relative overflow-hidden">
      {/* Animated ping glow behind logo */}
      <div className="absolute inline-flex h-48 w-48 rounded-full "></div>

      {/* Centered splash image */}
      <img
        src="/src/assets/images/jobup-icon.png"
        alt="JobUp Splash"
        className="w-[270px] h-[270px] z-10"
      />

      {/* No internet overlay */}
      {!hasInternet && <NoInternet onRetry={checkConnection} />}
    </div>
  );
};

export default SplashScreenPage;
