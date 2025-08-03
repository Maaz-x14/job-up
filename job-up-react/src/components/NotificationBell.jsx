import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";

export default function NotificationBell() {
  return (
    <button className="relative">
      <BellIcon className="h-6 w-6 text-indigo-600" />
      <span className="absolute top-0 right-0 w-2 h-2 bg-purple-600 rounded-full"></span>
    </button>
  );
}
