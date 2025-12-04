import React from "react";
import { Link, useLocation } from "react-router-dom";

const DevNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/language", label: "Language Selection" },
    { path: "/signup", label: "Sign Up" },
    { path: "/login", label: "Login" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/cattle", label: "Cattle List" },
  ];

  // Only show in development
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">
        Dev Navigation
      </h3>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block text-xs px-2 py-1 rounded ${
              location.pathname === item.path
                ? "bg-yellow-400 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default DevNavigation;
