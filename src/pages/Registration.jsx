// src/screens/Registration.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import AuthLayout from "../components/AuthLayout";

export default function RegistrationPage() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (phone.length === 10) {
      navigate("/otp");
    } else {
      alert("Invalid Number. Please enter a valid 10-digit mobile number.");
    }
  };

  return (
    <AuthLayout title="Enter the Mobile Number">
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full max-w-sm mb-[30px]">
        <span className="text-base sm:text-[20px] text-black pr-2 sm:pr-3">
          +92
        </span>
        <input
          type="tel"
          placeholder="3XX-XXXXXXX"
          maxLength={10}
          value={phone}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value)) {
              setPhone(value);
            }
          }}
          className="w-full outline-none text-black text-base sm:text-[20px] h-[40px]"
        />
      </div>

      <Button onClick={handleSendOtp}>Send OTP</Button>
    </AuthLayout>
  );
}
