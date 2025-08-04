import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react"; // or use an SVG if not using lucide

export function Job({
  title = "Sr. UX Designer",
  company = "Spotify HR",
  location = "Islamabad",
  type = "Fulltime",
  description = "UX Designers are the synthesis of design and development. They take Google's most innovative product concepts...",
  posted = "2 days ago",
  salary = "PKR 90k - 100k",
  logo = "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
  link = "/job-details",
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-4 w-full max-w-md border border-gray-200">
      {/* Top: Logo and View Button */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Company Logo"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>

        <Link
          to={link}
          className="text-[#5424FD] bg-indigo-50 text-sm px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-indigo-100 transition"
        >
          View
        </Link>
      </div>

      {/* Middle: Location & Type */}
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <span className="bg-gray-100 px-3 py-1 rounded-full">{location}</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full">{type}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 line-clamp-2">
        {description}{" "}
        <span className="text-[#5424FD] font-medium cursor-pointer">
          Read More
        </span>
      </p>

      {/* Footer: Posted + Salary */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <Clock size={16} /> Posted {posted}
        </span>
        <span className="text-gray-800 font-semibold">{salary}</span>
      </div>
    </div>
  );
}
