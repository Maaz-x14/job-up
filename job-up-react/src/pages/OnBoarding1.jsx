import React from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "../components/OnboardingLayout";
import art1 from "../assets/images/art-1.png";

export default function OnBoarding1() {
  const navigate = useNavigate();

  return (
    <OnboardingLayout
      image={art1}
      currentPage={0}
      totalPages={2}
      title={
        <>
          Your search for the next dream job is over with{" "}
          <span className="text-indigo-600">JobUp</span>
        </>
      }
      buttonText="Next"
      onButtonClick={() => navigate("/boarding2")}
      showSkip={true}
    />
  );
}
