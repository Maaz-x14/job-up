// src/screens/OTP.jsx
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import AuthLayout from "../components/AuthLayout";

export default function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [timer, setTimer] = useState(60);
  const [resendClicked, setResendClicked] = useState(false);
  const inputs = useRef([]);
  const navigate = useNavigate();

  const handleVerifyOTP = () => {
    navigate("/boarding1");
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (text, index) => {
    if (/^\d?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (text && index < 3) inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleFocus = (index) => setFocusedIndex(index);
  const handleBlur = () => setFocusedIndex(null);

  const handleResend = () => {
    if (timer === 0) {
      setTimer(60);
      setResendClicked(true);
      // Trigger resend logic here
    }
  };

  return (
    <AuthLayout title="OTP Verification">
      {/* OTP Inputs */}
      <div className="flex justify-between gap-3 mb-[30px] w-full max-w-sm">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            type="text"
            maxLength={1}
            value={digit}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyPress(e, index)}
            className={`w-12 sm:w-14 md:w-16 h-12 sm:h-14 text-center text-lg sm:text-xl rounded-lg focus:outline-none transition-colors duration-200 
              ${
                focusedIndex === index || digit
                  ? "border-[#5D28F4]"
                  : "border-gray-300"
              }
              border`}
          />
        ))}
      </div>

      <Button onClick={handleVerifyOTP}>Submit</Button>

      {/* Timer + Resend */}
      <div className="text-center mt-4 text-sm text-gray-800">
        <p className="mb-1">00:{timer.toString().padStart(2, "0")}</p>
        <p>
          Didn’t receive OTP?{" "}
          <span
            className={`font-medium cursor-pointer ${
              timer === 0
                ? "text-[#5D28F4] hover:underline"
                : "text-gray-400 cursor-not-allowed"
            } ${resendClicked ? "font-bold" : ""}`}
            onClick={handleResend}
          >
            Resend
          </span>
        </p>
      </div>
    </AuthLayout>
  );
}
