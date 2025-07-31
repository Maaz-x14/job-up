// src/components/AuthLayout.jsx
import React from "react";

export default function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-24 bg-white px-6">
      {/* Logo */}
      <img
        src="/src/assets/images/jobup-icon-reg.png"
        alt="Logo"
        className="w-[40vw] max-w-[160px] h-auto mb-5"
      />

      {/* Title */}
      <h2 className="text-center font-bold text-[16px] sm:text-[24px] md:text-[32px] lg:text-[40px] leading-[1.7] font-satoshi mb-[30px]">
        {title}
      </h2>

      {/* Dynamic Content */}
      {children}

      {/* Footer */}
      <p className="text-sm text-gray-500 text-center max-w-xs mt-6">
        By Signing In, I agree to user agreement and privacy policy.
      </p>
    </div>
  );
}
