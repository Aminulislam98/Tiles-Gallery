"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { HiEye, HiEyeOff } from "react-icons/hi";
import toast from "react-hot-toast";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    photoUrl: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);

    // TODO: BetterAuth signUp
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Account created! Please sign in.");
    setLoading(false);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT PANEL */}
      <div
        className="hidden lg:flex flex-col justify-between p-14"
        style={{ background: "#0F0E0C" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-[3px] w-7 h-7">
            <span
              className="rounded-sm block"
              style={{ background: "#B85C38" }}
            />
            <span
              className="rounded-sm block"
              style={{ background: "#C09A5B" }}
            />
            <span
              className="rounded-sm block"
              style={{ background: "#C09A5B" }}
            />
            <span
              className="rounded-sm block"
              style={{ background: "#B85C38" }}
            />
          </div>
          <span className="font-display text-xl font-medium text-white">
            Tiles
            <em className="not-italic" style={{ color: "#D4724D" }}>
              Gallery
            </em>
          </span>
        </Link>

        {/* Real tile photos */}
        <div className="flex flex-col gap-4 flex-1 py-10">
          <div className="relative rounded-2xl overflow-hidden h-48">
            <div
              className="absolute inset-0"
              style={{ background: "rgba(15,14,12,0.35)" }}
            />
            <div className="absolute bottom-5 left-5">
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Collection
              </p>
              <p className="font-display text-lg text-white font-medium">
                Carrara Marble
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1 min-h-[160px]">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1701251786408-d0320ecaad8d?w=800&q=85"
                alt="Terracotta"
                fill
                className="object-cover"
                sizes="300px"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(15,14,12,0.4)" }}
              />
              <p className="absolute bottom-4 left-4 font-display text-base text-white font-medium">
                Carrara, Italy
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1732831627964-f6fc7157aebd?w=800&q=85"
                alt="Mosaic"
                fill
                className="object-cover"
                sizes="300px"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(15,14,12,0.4)" }}
              />
              <p className="absolute bottom-4 left-4 font-display text-base text-white font-medium">
                Fez, Morocco
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <blockquote
          className="font-display text-2xl font-light leading-relaxed"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Your vision, brought to life in{" "}
          <em style={{ color: "#D4724D" }}>every tile.</em>
          <p
            className="text-xs mt-3 font-sans font-normal"
            style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.5px" }}
          >
            Tiles Gallery Community
          </p>
        </blockquote>
      </div>

      {/* RIGHT PANEL */}
      <div
        className="flex items-center justify-center px-8 py-16"
        style={{ background: "#F9F6F1" }}
      >
        <div className="w-full max-w-[400px]">
          {/* Mobile logo */}
          <Link href="/" className="flex items-center gap-2 mb-10 lg:hidden">
            <div className="grid grid-cols-2 gap-[2px] w-6 h-6">
              <span
                className="rounded-sm block"
                style={{ background: "#B85C38" }}
              />
              <span
                className="rounded-sm block"
                style={{ background: "#C09A5B" }}
              />
              <span
                className="rounded-sm block"
                style={{ background: "#C09A5B" }}
              />
              <span
                className="rounded-sm block"
                style={{ background: "#B85C38" }}
              />
            </div>
            <span
              className="font-display text-lg font-medium"
              style={{ color: "#0F0E0C" }}
            >
              Tiles
              <em className="not-italic" style={{ color: "#B85C38" }}>
                Gallery
              </em>
            </span>
          </Link>

          <span
            className="inline-block px-3 py-1 rounded text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: "rgba(184,92,56,0.1)", color: "#B85C38" }}
          >
            Welcome Back
          </span>

          <h1 className="font-display font-light leading-tight mb-2 text-[clamp(32px,5vw,42px)] text-[#0F0E0C] tracking-tight">
            Sign In
          </h1>
          <p className="text-sm font-light mb-8 text-[#8C8880]">
            Access your curated tile collection.
          </p>

          {/* Form */}
          <Form className="flex w-96 flex-col gap-4">
            {/* onSubmit={onSubmit} */}
            {/* name */}

            {/* email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input
                placeholder="john@example.com"
                className="border border-[#E4DFD8] shadow-none focus:ring-2 focus:ring-[#B85C38]/50 focus:ring-offset-0 focus:ring-offset-transparent text-sm py-3"
              />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input
                placeholder="Enter your password"
                className="border border-[#E4DFD8] shadow-none focus:ring-2 focus:ring-[#B85C38]/50 focus:ring-offset-0 focus:ring-offset-transparent text-sm py-3"
              />

              <FieldError />
            </TextField>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-black w-full py-3 rounded-xl text-sm font-medium text-white hover:bg-[#B85C38] transition-all duration-200 flex flex-row items-center justify-center gap-2 "
              >
                Create Account
                <MdOutlineArrowRightAlt className="text-xl" />
              </button>
            </div>
          </Form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <span className="flex-1 h-px bg-[#E4DFD8]" />
            <span className="text-xs text-[#8C8880]">or Continue with</span>
            <span className="flex-1 h-px bg-[#E4DFD8]" />
          </div>

          {/* Google */}
          <button
            onClick={() => toast("Google signup — connect BetterAuth")}
            className="w-full py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-3 transition-opacity hover:opacity-80 bg-white border border-[#E4DFD8] text-[#3A3835]"
          >
            <FcGoogle size={18} /> Continue with Google
          </button>

          {/* Login link */}
          <p className="text-center mt-6 text-sm" style={{ color: "#8C8880" }}>
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold underline-offset-4 transition-all hover:underline"
              style={{ color: "#B85C38" }}
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
