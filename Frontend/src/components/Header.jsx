import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <span className="bg-linear-to-r from-purple-400 to-fuchsia-400 text-transparent bg-clip-text">
            AwasChain
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition relative group font-medium"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="text-gray-300 hover:text-white transition relative group font-medium"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/docs"
            className="text-gray-300 hover:text-white transition relative group font-medium"
          >
            Docs
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

                    <Link
            to="/contact"
            className="text-gray-300 hover:text-white transition relative group font-medium"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-purple-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-gray-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="relative overflow-hidden px-4 py-2 rounded-lg font-medium
              bg-linear-to-r from-[#4c1d95] to-[#7e22ce]
              hover:from-[#5b21b6] hover:to-[#6d28d9]
              border border-white/10 text-gray-200
              transition-all duration-300 hover:scale-[1.02]
              shadow-md shadow-black/20"
          >
            Sign Up
            <span className="shine-effect"></span>
          </Link>
        </div>
      </div>
    </header>
  );
}
