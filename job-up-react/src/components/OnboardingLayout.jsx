import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export default function OnboardingLayout({
  image,
  currentPage,
  totalPages,
  title,
  buttonText,
  onButtonClick,
  showBack = false,
  showSkip = false,
}) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white px-6 pt-12 pb-8">
      {/* Header */}
      <div className="flex justify-between w-full items-center">
        {showBack ? (
          <span
            className="text-2xl text-gray-800 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            ←
          </span>
        ) : (
          <span className="text-2xl text-gray-800 invisible">←</span>
        )}

        {showSkip && (
          <span
            className="text-sm text-indigo-500 font-medium cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Skip
          </span>
        )}
      </div>

      {/* Illustration */}
      <img src={image} alt="Onboarding Art" className="w-[80%] max-w-xs" />

      {/* Page Indicator */}
      <div className="flex items-center gap-2 mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentPage
                ? "bg-indigo-600"
                : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

      {/* Text */}
      <h2 className="text-center text-lg sm:text-xl font-semibold px-4 mt-4">
        {title}
      </h2>

      {/* Button */}
      <div className="w-full max-w-xs mt-6">
        <Button onClick={onButtonClick}>{buttonText}</Button>
      </div>
    </div>
  );
}
