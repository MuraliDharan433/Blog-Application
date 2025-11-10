import axios from "axios";

const API = axios.create({
  baseURL: "https://blog-application-1-2jag.onrender.com",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
