import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import PrivateRoute from "./utils/PrivateRoute";
import CreatePost from "./components/Pages/CreatePost";
import EditPost from "./components/Pages/EditPost";
import NotFound from "./components/Pages/NotFound";
import Navbar from "./components/Navbar";
import PostDetails from "./components/Pages/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreatePost />
            </PrivateRoute>
          }
        />

        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditPost />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
