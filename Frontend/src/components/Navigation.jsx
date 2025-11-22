import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          <Link
            to="/"
            className="text-2xl font-bold bg-linear-to-r from-purple-400 to-fuchsia-400 
                     bg-clip-text text-transparent hover:opacity-90 transition"
          >
            AwasChain
          </Link>
        </div>

        {/* Wallet / User */}
        <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm text-gray-200">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
