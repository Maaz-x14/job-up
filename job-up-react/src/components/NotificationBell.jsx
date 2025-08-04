import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";

export default function NotificationBell() {
  return (
    <button className="relative">
      <BellIcon className="h-6 w-6 text-[#5424FD]" />
      <span className="absolute top-0 right-0 w-2 h-2 bg-[#5424FD] rounded-full"></span>
    </button>
  );
}
