import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Dashboard from "./pages/AppDashboard";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}
