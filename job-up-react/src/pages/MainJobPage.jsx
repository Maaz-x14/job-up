import React, { useState } from "react";
import { Job } from "../components/Job";
import SearchBar from "../components/searchBar";
import NotificationBell from "../components/NotificationBell";
import coursesImg from "../assets/images/courses.png";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { data } from "../data/jobs";

const categorizedJobs = {
  popular: data.slice(0, 3),
  recommended: data.slice(1, 4),
  recent: data.slice(2, 5),
};

export default function JobsPage() {
  const [activeCategory, setActiveCategory] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");

  const filterJobs = (jobs) => {
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      {/* Top Notification */}
      <div className="flex justify-end mb-4">
        <NotificationBell />
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">Find Your Next Opportunity</h1>
          <p className="text-gray-500 mt-2">
            Browse training & courses to level up your career
          </p>

          {/* Search Bar with Filter Button */}
          <div className="mt-4 flex items-center gap-3">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <button className="px-4 py-2 bg-white border border-indigo-200 text-indigo-600 rounded-lg shadow-sm hover:bg-indigo-50 flex items-center gap-2">
              <FunnelIcon className="h-5 w-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <img
          src={coursesImg}
          alt="Training and Courses"
          className="w-full max-w-sm rounded-lg shadow-md"
        />
      </div>

      {/* Category Selection */}
      <div className="flex gap-4 justify-center mb-10">
        {["popular", "recommended", "recent"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === category
                ? "bg-indigo-600 text-white"
                : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Job Listings */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filterJobs(categorizedJobs[activeCategory]).map((job, i) => (
          <Job key={`${activeCategory}-${i}`} {...job} />
        ))}
      </div>
    </section>
  );
}
