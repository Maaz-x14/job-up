import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function JobFilters() {
  const [country, setCountry] = useState("Pakistan");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("Diploma");
  const [jobType, setJobType] = useState("Full-Time");
  const [jobCategory, setJobCategory] = useState("Onsite");
  const [salaryRange, setSalaryRange] = useState([5000, 5000000]);

  const jobTypes = ["Full-Time", "Part-Time", "Internship", "Contract Based"];
  const jobCategories = ["Onsite", "Remote", "Hybrid"];
  const educationLevels = [
    "Diploma",
    "Undergraduate",
    "Graduation",
    "Post-Graduation",
    "Doctorate",
  ];
  const cities = ["Islamabad", "Lahore", "Karachi", "Rawalpindi"];

  const navigate = useNavigate();

  const resetFilters = () => {
    setCountry("Pakistan");
    setExperience("");
    setEducation("Diploma");
    setJobType("Full-Time");
    setJobCategory("Onsite");
    setSalaryRange([5000, 5000000]);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-lg">
      <ArrowLeftIcon
        onClick={() => navigate("/mainjobpage")}
        className="h-[20px] w-[20px] absolute mt-2 hover:cursor-pointer bg-gray-200 m-2 rounded-xl"
      />
      <h2 className="text-2xl sm:text-3xl text-center mb-6 text-gray-800">
        Filters
      </h2>

      {/* Job Type */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Job Type</h3>
        <div className="flex flex-wrap gap-3">
          {jobTypes.map((type) => (
            <button
              key={type}
              onClick={() => setJobType(type)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                jobType === type
                  ? "bg-[#5424FD] text-white"
                  : "bg-indigo-50 text-[#5424FD] hover:bg-indigo-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Job Category */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Job Category
        </h3>
        <div className="flex flex-wrap gap-3">
          {jobCategories.map((category) => (
            <button
              key={category}
              onClick={() => setJobCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                jobCategory === category
                  ? "bg-[#5424FD] text-white"
                  : "bg-indigo-50 text-[#5424FD] hover:bg-indigo-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Experience</h3>
        <div className="relative">
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full px-4 py-3 pr-10 bg-white border border-gray-300 rounded-xl shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5424FD] appearance-none"
          >
            <option value="">Choose experience level</option>
            <option value="Less than 1 year">Less than 1 year</option>
            <option value="1-3 Years">1-3 Years</option>
            <option value="3-5 Years">3-5 Years</option>
            <option value="5-10 Years">5-10 Years</option>
            <option value="10+ Years">10+ Years</option>
          </select>

          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Country & City */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Select Country
        </h3>
        <div className="flex flex-wrap gap-4 mb-4">
          {["Pakistan", "International"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 text-gray-600"
            >
              <input
                type="radio"
                value={option}
                checked={country === option}
                onChange={(e) => setCountry(e.target.value)}
                className="accent-[#5424FD]"
              />
              {option}
            </label>
          ))}
        </div>

        {country === "Pakistan" && (
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Select City
            </h3>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50">
              <option value="">Choose a city</option>
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Education */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Education</h3>
        <div className="flex flex-wrap gap-3">
          {educationLevels.map((level) => (
            <button
              key={level}
              onClick={() => setEducation(level)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                education === level
                  ? "bg-[#5424FD] text-white"
                  : "bg-indigo-50 text-[#5424FD] hover:bg-indigo-100"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Salary Range */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">
          Salary Range
        </h3>
        <div className="flex flex-col gap-2">
          <input
            type="range"
            min="5000"
            max="5000000"
            value={salaryRange[0]}
            onChange={(e) =>
              setSalaryRange([Number(e.target.value), salaryRange[1]])
            }
            className="w-full"
          />
          <input
            type="range"
            min="5000"
            max="5000000"
            value={salaryRange[1]}
            onChange={(e) =>
              setSalaryRange([salaryRange[0], Number(e.target.value)])
            }
            className="w-full"
          />
          <p className="text-sm text-gray-500">
            ₨{salaryRange[0]} – ₨{salaryRange[1]}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={resetFilters}
          className="w-full sm:w-auto px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
        >
          Reset
        </button>
        <button className="w-full sm:w-auto px-4 py-2 bg-[#5424FD] text-white rounded-lg hover:bg-[#3d1ed1] transition">
          Apply
        </button>
      </div>
    </div>
  );
}
