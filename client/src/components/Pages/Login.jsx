import React from "react";
import { useState } from "react";
import API from "../../api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await API.post("/auth/login", { email, password });
      console.log(data.data);
      dispatch(loginSuccess(data.data));
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        action=""
        className="bg-white p-8 rounded-lg shadow-md w-100 "
        onSubmit={handleLogin}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-[#00A7F3]">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="border px-3 py-2 rounded w-full mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border px-3 py-2 rounded w-full mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
