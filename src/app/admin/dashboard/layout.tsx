"use client";

import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Link from "next/link";
import React, { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sideFlag, setSideFlag] = useState(false); // for mobile toggle
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); // for lg toggle

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow">
        <div className="w-11/12 max-w-[1440px] mx-auto">
          <DashboardNavbar sideFlag={sideFlag} setSideFlag={setSideFlag} />
        </div>
      </header>

      {/* Main */}
      <div className="flex pt-20 w-11/12 max-w-[1440px] mx-auto h-screen overflow-hidden relative">
        {/* Sidebar */}
        <aside
          className={`${
            sideFlag ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"
          } transition-all duration-300 ease-in-out
            max-lg:fixed max-lg:top-20 max-lg:left-0
            max-lg:w-60 max-lg:h-[calc(100vh-5rem)]
            ${isSidebarExpanded ? "lg:w-64" : "lg:w-20"}
            bg-white border-r border-gray-200 shadow-sm z-40 
            overflow-y-auto flex flex-col justify-between p-4 relative`}
          aria-hidden={!sideFlag}
        >
          {/* Toggle button - visible only on lg+ */}
          <button
            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
            className="hidden lg:flex items-center absolute top-4 right-2 text-sm text-gray-500 hover:text-gray-800 transition"
          >
            {isSidebarExpanded ? "◀" : "▶"}
          </button>

          {/* Sidebar Links */}
          <div className="space-y-3 mt-10">
            <SidebarLink href="/" label="🏠 Home" />
            <SidebarLink href="/admin/dashboard/upload" label="📤 Upload" />
            <SidebarLink href="/admin/dashboard/allVisa" label="🛂 All Visa" />
            <SidebarLink href="" label="❌ Removed Visa" />
          </div>

          {/* Bottom Links */}
          <div className="mt-10 space-y-3">
            <SidebarLink href="/profile" label="👤 Profile" />
            <SidebarLink href="/logout" label="🚪 Logout" />
          </div>
        </aside>

        {/* Page Content */}
        <main className="lg:flex-1 w-full overflow-y-auto p-5 bg-gray-50 transition-all">
          {children}
        </main>
      </div>
    </div>
  );
};

// Sidebar Link Component
const SidebarLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
  >
    {label}
  </Link>
);

export default Layout;
