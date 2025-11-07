import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
      >
        ← Back to Home
      </Link>

      
    </div>
  );
}

export default NotFound;
