// src/components/NoInternet.jsx
import React from "react";
import noWifi from "../assets/images/no-wifi.png";

const NoInternet = ({ onRetry }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl px-6 py-8 w-[90%] max-w-md text-center shadow-lg">
        <img
          src={noWifi}
          alt="No Internet"
          className="w-14 sm:w-16 h-auto mx-auto mb-4"
        />

        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          No Internet Connection!
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-6">
          Please check your internet connection
        </p>
        <button className="text-sm sm:text-base bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default NoInternet;
