"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

// dark={true}  → transparent navbar, use on Home page only
// dark={false} → white navbar, use on all other pages

export default function Navbar({ dark = false }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  //   TODO: replace with real auth state
  const isLoggedIn = false;
  const user = { name: "Aminul", initials: "AI" };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const transparent = dark && !scrolled;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: transparent ? "transparent" : "rgba(249,246,241,0.95)",
        backdropFilter: transparent ? "none" : "blur(16px)",
        borderBottom: transparent ? "none" : "1px solid #E4DFD8",
        height: transparent ? "72px" : "60px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* 2x2 coloured tile grid */}
          <div className="grid grid-cols-2 gap-[3px] w-7 h-7">
            <span className="rounded-sm bg-[#B85C38] block" />
            <span className="rounded-sm bg-[#C09A5B] block" />
            <span className="rounded-sm bg-[#C09A5B] block" />
            <span className="rounded-sm bg-[#B85C38] block" />
          </div>
          <span
            className="font-display text-xl font-medium"
            style={{ color: transparent ? "#fff" : "#0F0E0C" }}
          >
            Tiles
            <em className="not-italic" style={{ color: "#B85C38" }}>
              Gallery
            </em>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {[
            { href: "/", label: "Home" },
            { href: "/all-tiles", label: "All Tiles" },
            { href: "/my-profile", label: "My Profile" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{
                  color:
                    pathname === link.href
                      ? transparent
                        ? "#fff"
                        : "#0F0E0C"
                      : transparent
                        ? "rgba(255,255,255,0.65)"
                        : "#8C8880",
                  background:
                    pathname === link.href
                      ? transparent
                        ? "rgba(255,255,255,0.12)"
                        : "#E4DFD8"
                      : "transparent",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <>
              {/* User chip */}
              <Link
                href="/my-profile"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: "#E4DFD8" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                  style={{ background: "#B85C38" }}
                >
                  {user.initials}
                </div>
                <span className="text-sm font-medium text-[#0F0E0C] pr-1">
                  {user.name}
                </span>
              </Link>
              {/* Logout */}
              <button
                className="px-4 py-2 text-sm font-medium rounded-lg border transition-colors"
                style={{ borderColor: "#CFC9C0", color: "#8C8880" }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-5 py-2 text-sm font-medium rounded-lg border transition-colors"
                style={{
                  borderColor: transparent
                    ? "rgba(255,255,255,0.3)"
                    : "#CFC9C0",
                  color: transparent ? "rgba(255,255,255,0.8)" : "#8C8880",
                }}
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="px-5 py-2 text-sm font-medium rounded-lg text-white transition-colors hover:opacity-90"
                style={{ background: "#0F0E0C" }}
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          style={{ color: transparent ? "#fff" : "#0F0E0C" }}
        >
          {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden absolute top-full left-0 right-0 shadow-lg"
          style={{ background: "#FAF7F2", borderBottom: "1px solid #E4DFD8" }}
        >
          <div className="px-6 py-4 flex flex-col gap-2">
            {[
              { href: "/", label: "Home" },
              { href: "/all-tiles", label: "All Tiles" },
              { href: "/my-profile", label: "My Profile" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium"
                style={{ color: "#8C8880" }}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="flex gap-2 pt-2 border-t"
              style={{ borderColor: "#E4DFD8" }}
            >
              <Link
                href="/login"
                className="flex-1 py-2.5 text-center text-sm font-medium rounded-lg border"
                style={{ borderColor: "#CFC9C0", color: "#8C8880" }}
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="flex-1 py-2.5 text-center text-sm font-medium rounded-lg text-white"
                style={{ background: "#0F0E0C" }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
