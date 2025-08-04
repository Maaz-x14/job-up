import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <>
      <h1>404 - Page not found</h1>
      <Link to="/" className="hover:underline bg-gray-700 rounded-lg text-white inline-block p-4 mt-6 hover:bg-white hover:text-red-800">
        Return to homepage
      </Link>
    </>
  );
}
