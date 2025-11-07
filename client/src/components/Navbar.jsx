import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-[#00a7f3] w-full h-[60px] shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center h-full px-4 sm:px-8 md:px-12">
        <Link
          to="/"
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white"
        >
          BlogApp
        </Link>

        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <Link
              to="/create"
              className="bg-[#00F3A4] hover:bg-[#0ada94] text-black font-medium px-3 py-2 rounded-md shadow-md text-sm sm:text-base"
            >
              Create Post
            </Link>

            <div className="flex items-center gap-3">
              {user?.profileImage ? (
                <img
                  src={`http://localhost:4000${user.profileImage}`}
                  alt="Profile"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-white"
                />
              ) : (
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs sm:text-sm text-gray-700">
                  {user?.username ? user.username.charAt(0).toUpperCase() : "U"}
                </div>
              )}

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-2 rounded-md text-sm sm:text-base"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="bg-[#1E293B] hover:bg-[#00F3A4] hover:text-black text-white font-medium px-4 py-2 rounded-md text-sm sm:text-base transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-[#1E293B] hover:bg-[#00F3A4] hover:text-black text-white font-medium px-4 py-2 rounded-md text-sm sm:text-base transition-all duration-200"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
