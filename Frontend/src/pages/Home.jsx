import React, { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState(null);

  function handleContactChange(e) {
    const { name, value } = e.target;
    setContact((s) => ({ ...s, [name]: value }));
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    if (!contact.name.trim() || !contact.email.trim() || !contact.message.trim()) {
      setContactStatus({ type: "error", msg: "Please fill all fields." });
      return;
    }
    console.log("Contact form submitted", contact);
    setContactStatus({ type: "success", msg: "Thanks — we received your message (dummy)." });
    setContact({ name: "", email: "", message: "" });
  }

  const SERVICES = [
    { id: 1, title: "Verified Ownership", desc: "Immutable on-chain records for property deeds — tamper-proof and auditable.", icon: "🏷️" },
    { id: 2, title: "Secure Transactions", desc: "Smart-contract escrow & settlement flows for faster, transparent transfers.", icon: "🔒" },
    { id: 3, title: "Property Tokenization", desc: "Fractional ownership via tokens — unlock liquidity and new investment models.", icon: "🏘️" },
  ];

  const FEATURES = [
    { id: 1, title: "On-chain Title Registry", detail: "Register and verify titles with cryptographic proof." },
    { id: 2, title: "Audit Trail", detail: "Full versioned history of property events accessible to authorized users." },
    { id: 3, title: "KYC & Compliance", detail: "Pluggable KYC/AML integrations for regulated transactions." },
    { id: 4, title: "Wallet-first UX", detail: "Connect wallets to sign transactions securely." },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white px-4 md:px-6 relative overflow-hidden">
      <Header />

      {/* HERO */}
      <div id="hero" className="pt-40 pb-8 md:pt-40 md:pb-12 flex items-center justify-center relative">
        <div className="blob blob-purple" />
        <div className="blob blob-fuchsia" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl md:max-w-4xl px-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
            <span className="bg-linear-to-r from-purple-500 to-fuchsia-400 text-transparent bg-clip-text drop-shadow-[0_0_18px_rgba(168,85,247,0.45)]">
              AwasChain
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-6">
            India’s next-generation Web3 Real Estate ecosystem — verified ownership, secure transactions, and transparent records.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
            <a
              href="/login"
              className="relative overflow-hidden px-5 sm:px-6 py-2.5 rounded-lg font-medium
              bg-linear-to-r from-[#4c1d95] to-[#7e22ce] text-gray-200 border border-white/10 shadow-md shadow-black/20
              transition-all duration-300 hover:scale-[1.01]"
            >
              Get Started
              <span className="shine-effect" />
            </a>

            <a href="#contact" className="px-5 py-2.5 rounded-lg border border-white/10 text-gray-300 hover:text-white transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-3">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-purple-300 font-semibold">Our Services</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">What we offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-2">
              AwasChain brings blockchain transparency, speed and security to real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <article key={s.id} className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:scale-[1.02] transition">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h4 className="text-lg font-semibold mb-1">{s.title}</h4>
                <p className="text-gray-300 text-sm">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section id="product" className="py-12 md:py-14 bg-linear-to-b from-transparent to-black/40">
        <div className="max-w-7xl mx-auto px-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* TEXT SIDE */}
            <div>
              <h3 className="text-purple-300 font-semibold">Product</h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">What AwasChain does</h2>
              <p className="text-gray-400 mt-4 max-w-xl">
                GharLedger is India’s decentralised registry & transaction layer for property. Fraud-proof, transparent and fast.
              </p>

              <ul className="mt-5 space-y-2">
                {FEATURES.map((f) => (
                  <li key={f.id} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-md bg-white/6 flex items-center justify-center text-purple-300 font-semibold">✓</div>
                    <div>
                      <div className="font-medium text-sm">{f.title}</div>
                      <div className="text-xs text-gray-300">{f.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* SAMPLE CARD — FINAL FIXED VERSION */}
            <div className="rounded-2xl border border-white/8 overflow-hidden bg-transparent">
              
              {/* IMAGE */}
              <div className="relative h-48 sm:h-56">
                <img
                  src="https://ipfs.io/ipfs/QmQUozrHLAusXDxrvsESJ3PYB3rUeUuBAvVWw6nop2uu7c/1.png"
                  alt="Sample Property"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 brand-tint" />

                <div className="absolute bottom-4 left-4">
                  <div className="text-sm text-white/90">Sample Property</div>
                  <div className="text-xl sm:text-2xl font-semibold text-white">3BHK, Sector 12</div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 bg-white/3">
                <p className="text-gray-300 text-sm mb-3">
                  This sample shows how title proof, metadata and history will appear inside GharLedger — fully on-chain and verifiable.
                </p>

                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded-md bg-white/6 border border-white/8 text-sm">View details</button>

                  <button className="px-3 py-1 rounded-md bg-linear-to-r from-purple-600 to-fuchsia-500 text-gray-100 text-sm">
                    Request proof
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-12 md:py-14">
        <div className="max-w-5xl mx-auto px-3">
          <div className="text-center mb-6">
            <h3 className="text-purple-300 font-semibold">Get in touch</h3>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1">Contact Us</h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              Questions or demo? Reach out, we respond quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* CONTACT INFO */}
            <div className="rounded-2xl border border-white/8 p-5 bg-white/4 text-sm">
              <h4 className="font-semibold text-white mb-2">Office (dummy)</h4>
              <p className="text-gray-300 mb-3">AwasChain Labs — Chandigarh</p>

              <div className="space-y-2 text-gray-300">
                <div><div className="text-xs opacity-80">Email</div>hello@awaschain.example</div>
                <div><div className="text-xs opacity-80">Phone</div>+91 98765 43210</div>
                <div><div className="text-xs opacity-80">Hours</div>Mon–Fri, 10:00–18:00 IST</div>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleContactSubmit} className="space-y-3 rounded-2xl border border-white/8 p-5 bg-white/3">
              {contactStatus && (
                <div className={`p-2 rounded text-sm ${
                  contactStatus.type === "error"
                    ? "bg-red-900/25 text-red-300"
                    : "bg-green-900/20 text-green-200"
                }`}>
                  {contactStatus.msg}
                </div>
              )}

              <label className="block">
                <span className="text-xs text-gray-300">Full name</span>
                <input
                  name="name"
                  value={contact.name}
                  onChange={handleContactChange}
                  className="mt-2 w-full rounded-md px-3 py-2 bg-white/3 border border-white/8 text-gray-100"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label className="block">
                <span className="text-xs text-gray-300">Email</span>
                <input
                  name="email"
                  type="email"
                  value={contact.email}
                  onChange={handleContactChange}
                  className="mt-2 w-full rounded-md px-3 py-2 bg-white/3 border border-white/8 text-gray-100"
                  placeholder="you@domain.com"
                  required
                />
              </label>

              <label className="block">
                <span className="text-xs text-gray-300">Message</span>
                <textarea
                  name="message"
                  value={contact.message}
                  onChange={handleContactChange}
                  rows="4"
                  className="mt-2 w-full rounded-md px-3 py-2 bg-white/3 border border-white/8 text-gray-100"
                  placeholder="Tell us what you need"
                  required
                />
              </label>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="relative overflow-hidden px-4 py-2 rounded-lg font-medium bg-linear-to-r from-[#4c1d95] to-[#7e22ce] text-gray-100 border border-white/10 shadow-md"
                >
                  Send
                  <span className="shine-effect" />
                </button>
                <button
                  type="button"
                  onClick={() => setContact({ name: "", email: "", message: "" })}
                  className="px-3 py-2 rounded-lg border border-white/8 text-gray-300"
                >
                  Reset
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AwasChain — GharLedger. All rights reserved.
      </footer>
    </div>
  );
}
