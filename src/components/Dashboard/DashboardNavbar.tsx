"use client";

import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const DashboardNavbar = ({
  setSideFlag,
  sideFlag,
}: {
  setSideFlag: (value: boolean) => void;
  sideFlag: boolean;
}) => {
  return (
    <nav className="h-20 bg-white border-b px-4 flex items-center justify-between">
      {/* Left: Logo & Menu */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle (Mobile) */}
        <button
          onClick={() => setSideFlag(!sideFlag)}
          className="lg:hidden text-2xl text-gray-700 focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          <IoMenu />
        </button>

        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 hidden lg:block">
          Dashboard
        </div>
      </div>

      {/* Center: Navigation (optional future use) */}
      <div className="hidden md:flex gap-6 text-gray-600">
        <Link
          href="/"
          className="hover:text-blue-600 transition font-medium"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-blue-600 transition font-medium"
        >
          About
        </Link>
      </div>

      {/* Right: User Actions */}
      <div className="flex items-center gap-3">
        <button className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
          Login
        </button>
        <FaUserCircle className="text-2xl text-gray-500 hidden sm:block" />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
