import React, { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";

/**
 * Signup is demo-only: it accepts the demo credentials only.
 * Password strength indicator is provided (weak/medium/strong).
 */

const DEMO_EMAIL = "rajan@mail.com";
const DEMO_PWD = "Rajan@321!!";

function passwordStrength(pwd) {
  // score 0..4
  let score = 0;
  if (!pwd) return { score: 0, label: "Empty" };
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
  if (/\d/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  let label = "Weak";
  if (score <= 1) label = "Weak";
  else if (score === 2 || score === 3) label = "Medium";
  else label = "Strong";

  return { score, label };
}

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const strength = useMemo(() => passwordStrength(form.password), [form.password]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setError("");
    setStatus(null);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus(null);

    // basic checks
    if (!form.name.trim() || !form.email.trim() || !form.password || !form.confirm) {
      setError("Please fill all fields.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));

    // For demo: only allow the designated demo credential pair
    if (form.email === DEMO_EMAIL && form.password === DEMO_PWD) {
      // "register" success
      localStorage.setItem("fakeAuth", "true");
      setStatus({ type: "success", msg: "Signed up (demo). Redirecting…" });
      setTimeout(() => navigate("/app"), 700);
    } else {
      setError("Signup disabled for custom credentials in demo. Use rajan@mail.com / Rajan@321!!");
    }

    setLoading(false);
  }

  // visual bar color mapping
  function strengthColor(score) {
    if (score <= 1) return "bg-red-500";
    if (score === 2 || score === 3) return "bg-yellow-400";
    return "bg-green-400";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4">
      <div className="w-full max-w-lg bg-white/4 backdrop-blur-md border border-white/8 rounded-2xl p-6 sm:p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-1">Create your account</h2>
        <p className="text-sm text-gray-300 mb-4">Demo signup — only demo credentials allowed.</p>

        {error && <div className="mb-3 text-sm text-red-300 bg-red-900/20 p-2 rounded">{error}</div>}
        {status && <div className="mb-3 text-sm text-green-200 bg-green-900/20 p-2 rounded">{status.msg}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-300">Full name</span>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name"
              className="mt-2 w-full rounded-md px-3 py-2 bg-white/3 border border-white/8 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700/30" />
          </label>

          <label className="block">
            <span className="text-sm text-gray-300">Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@domain.com"
              className="mt-2 w-full rounded-md px-3 py-2 bg-white/3 border border-white/8 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700/30" />
          </label>

          <label className="block">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Password</span>
              <span className="text-xs text-gray-400">{form.password ? strength.label : "Enter password"}</span>
            </div>

            <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Create a strong password"
              className="mt-2 w-full rounded-md px-3 py-2 bg-white/3 border border-white/8 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700/30" />
            {/* strength bar */}
            <div className="mt-2 h-2 w-full bg-white/8 rounded-full overflow-hidden">
              <div
                className={`h-full ${strengthColor(strength.score)}`}
                style={{ width: `${(strength.score / 4) * 100}%`, transition: "width 180ms ease-in-out" }}
              />
            </div>
          </label>

          <label className="block">
            <span className="text-sm text-gray-300">Confirm password</span>
            <input name="confirm" type="password" value={form.confirm} onChange={handleChange} placeholder="Repeat password"
              className="mt-2 w-full rounded-md px-3 py-2 bg-white/3 border border-white/8 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700/30" />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="relative overflow-hidden w-full mt-1 px-4 py-2 rounded-lg font-medium
              bg-linear-to-r from-[#4c1d95] to-[#7e22ce]
              hover:from-[#5b21b6] hover:to-[#6d28d9]
              border border-white/10 text-gray-100 transition-all duration-200 shadow-md shadow-black/20 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-white hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
