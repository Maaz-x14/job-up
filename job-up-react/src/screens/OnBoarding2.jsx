import React from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "../components/OnboardingLayout";
import art2 from "../assets/images/art-2.png";

export default function OnBoarding2() {
  const navigate = useNavigate();

  return (
    <OnboardingLayout
      image={art2}
      currentPage={1}
      totalPages={2}
      title={
        <>
          Find your career successfully with{" "}
          <span className="text-indigo-600">JobUp</span>. <br /> Let's begin
        </>
      }
      buttonText="Get Started"
      onButtonClick={() => navigate("#")}
      showBack={true}
    />
  );
}
