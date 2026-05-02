"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import { RiLogoutBoxLine } from "react-icons/ri";
import LogoutModal from "@/components/ui/LogoutConfirm";
import { Tooltip } from "@heroui/react";
import Image from "next/image";

export default function Navbar({ dark = false }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const transparent = dark && !scrolled;

  const {
    data: session,
    isPending, //loading state
    error, //error object
  } = authClient.useSession();

  // name
  const userName = session?.user?.name || "Guest";
  const userImage = session?.user?.image;
  const initials = userName
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase())
    .join("");

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
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
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
            { href: "/allTiles", label: "All Tiles" },
            { href: "/profile", label: "My Profile" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors "
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
                        ? "rgba(255,255,255,0.12) "
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
          {session ? (
            <>
              {/* User chip */}

              <Link
                href="/profile"
                className="group transition-all duration-200 hover:scale-[1.02]"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "2px",
                  borderRadius: "9999px",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))",
                  border: "0.5px solid rgba(255,255,255,0.5)",
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                }}
              >
                <div className="flex items-center rounded-full overflow-hidden">
                  <div className=" rounded-full">
                    {userImage ? (
                      <Image
                        src={userImage}
                        alt={userName}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #D4724D 0%, #B85C38 60%, #96421E 100%)",
                        }}
                      >
                        {initials}
                      </div>
                    )}
                  </div>

                  <span
                    className="max-w-0 group-hover:max-w-[120px] overflow-hidden
                 transition-all duration-300 ease-out
                 text-xs font-semibold whitespace-nowrap
                 group-hover:pl-2 group-hover:pr-3"
                    style={{
                      color: transparent ? "white" : "#D4724D",
                    }}
                  >
                    {userName}
                  </span>
                </div>
              </Link>

              {/* Logout */}
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center  cursor-pointer transition-all duration-200 hover:scale-[1.02]"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "2px 10px 2px 2px", // same padding as profile pill
                  borderRadius: "9999px",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.1))",
                  border: "1px solid rgba(192,57,43,0.3)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  boxShadow:
                    "0 4px 16px rgba(192,57,43,0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
              >
                {/* Icon circle — same size as avatar w-8 h-8 */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(220,53,53,0.15), rgba(180,30,30,0.08))",
                    border: "1px solid rgba(192,57,43,0.2)",
                  }}
                >
                  <RiLogoutBoxLine size={14} style={{ color: "#C0392B" }} />
                </div>

                {/* Text */}
                <span
                  className="text-xs font-semibold pl-2"
                  style={{
                    color: transparent ? "black" : "#C0392B",
                  }}
                >
                  Sign out
                </span>
              </button>
              <LogoutModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
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
          className="md:hidden p-2 px-0 "
          onClick={() => setOpen(!open)}
          style={{ color: transparent ? "#fff" : "#0F0E0C" }}
        >
          {open ? <HiX size={28} /> : <HiMenuAlt3 size={30} />}
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
              { href: "/allTiles", label: "All Tiles" },
              { href: "/profile", label: "My Profile" },
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
            {session ? (
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center 
                border border-red-300/50 rounded-lg px-4 py-3 text-base font-medium text-red-600 text-center w-full justify-center
                cursor-pointer transition-all duration-200 hover:scale-[1.02]"
              >
                Logout
              </button>
            ) : (
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
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
