"use client";

import { useState } from "react";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import toast from "react-hot-toast";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function UpdateProfilePage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "Aminul Islam", image: "" });

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!form.name) {
      toast.error("Name is required.");
      return;
    }
    setLoading(true);
    // TODO: BetterAuth updateUser
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Profile updated successfully!");
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main
        className="pt-[60px] min-h-screen flex items-center justify-center px-6 py-20"
        style={{ background: "#F9F6F1" }}
      >
        <div className="w-full max-w-md">
          {/* Back link */}
          <Link
            href="/profile"
            className="flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-70"
            style={{ color: "#8C8880" }}
          >
            <HiArrowLeft size={14} /> Back to Profile
          </Link>

          {/* Tag */}
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(184,92,56,0.1)", color: "#B85C38" }}
          >
            Edit Profile
          </span>

          <h1
            className="font-display font-light leading-tight mb-2"
            style={{
              fontSize: "42px",
              color: "#0F0E0C",
              letterSpacing: "-1px",
            }}
          >
            Update Info
          </h1>
          <p className="text-sm font-light mb-10" style={{ color: "#8C8880" }}>
            Change your display name and profile photo.
          </p>

          {/* Form card */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "#fff", border: "1px solid #E4DFD8" }}
          >
            <form onSubmit={handleUpdate} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  className="block text-xs font-semibold mb-2"
                  style={{ color: "#3A3835" }}
                >
                  Display Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your display name"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{
                    background: "#F9F6F1",
                    border: "1.5px solid #E4DFD8",
                    color: "#0F0E0C",
                  }}
                />
              </div>

              {/* Image URL */}
              <div>
                <label
                  className="block text-xs font-semibold mb-2"
                  style={{ color: "#3A3835" }}
                >
                  Image URL
                </label>
                <input
                  type="url"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{
                    background: "#F9F6F1",
                    border: "1.5px solid #E4DFD8",
                    color: "#0F0E0C",
                  }}
                />
                <p className="text-xs mt-1.5" style={{ color: "#8C8880" }}>
                  Paste a direct link to your profile photo.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50"
                style={{ background: "#0F0E0C" }}
              >
                {loading ? "Updating…" : "Update Information"}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
