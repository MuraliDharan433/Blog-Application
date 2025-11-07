import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      form.append("username", formData.username);
      form.append("email", formData.email);
      form.append("password", formData.password);

      if (profileImage) form.append("profileImage", profileImage);

      await API.post("/auth/register", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err);
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-[#00A7F3]">
          Create Account
        </h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full mb-3 focus:ring focus:ring-[#00A7F3]/30 outline-none"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full mb-3 focus:ring focus:ring-[#00A7F3]/30 outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full mb-3 focus:ring focus:ring-[#00A7F3]/30 outline-none"
          required
        />

        <div className="mb-4">
          <label className="block mb-1 text-gray-600 font-medium">
            Profile Image (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
            className="w-full border px-3 py-2 rounded cursor-pointer"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#00A7F3] text-white w-full py-2 rounded hover:bg-[#0090D6] transition disabled:opacity-60"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-gray-600 text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#00A7F3] hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
