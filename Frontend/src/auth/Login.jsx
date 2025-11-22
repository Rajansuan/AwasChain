import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/**
 * Demo credentials:
 * email: rajan@mail.com
 * password: Rajan@321!!
 */

const DEMO_EMAIL = "rajan@mail.com";
const DEMO_PWD = "Rajan@321!!";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setError("");
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // simulate network delay
    await new Promise((r) => setTimeout(r, 500));

    // only allow demo credentials for now
    if (form.email === DEMO_EMAIL && form.password === DEMO_PWD) {
      localStorage.setItem("fakeAuth", "true");
      navigate("/app");
    } else {
      setError("Invalid credentials. Use demo credentials: rajan@mail.com / Rajan@321!!");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4">
      <div className="w-full max-w-md bg-white/4 backdrop-blur-md border border-white/8 rounded-2xl p-6 sm:p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-1">Welcome back</h2>
        <p className="text-sm text-gray-300 mb-5">Sign in to your GharLedger account (demo)</p>

        {error && <div className="mb-4 text-sm text-red-300 bg-red-900/20 p-3 rounded">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-300">Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@domain.com"
              className="mt-2 w-full rounded-md px-3 py-2 bg-white/3 border border-white/8 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700/30"
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-300">Password</span>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="mt-2 w-full rounded-md px-3 py-2 bg-white/3 border border-white/8 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700/30"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="relative overflow-hidden w-full mt-2 px-4 py-2 rounded-lg font-medium
              bg-linear-to-r from-[#4c1d95] to-[#7e22ce]
              hover:from-[#5b21b6] hover:to-[#6d28d9]
              border border-white/10 text-gray-100 transition-all duration-200 shadow-md shadow-black/20 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
            <span className="shine-effect" />
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-300">
          Demo account: <span className="text-white font-medium">rajan@mail.com</span> /
          <span className="text-white font-medium"> Rajan@321!!</span>
        </p>

        <div className="mt-6 text-sm text-gray-300">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-white hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
