"use client";
import { p } from "framer-motion/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  const pathName = usePathname();
  return (
    <footer style={{ background: "#0F0E0C", color: "rgba(255,255,255,0.5)" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="grid grid-cols-2 gap-[3px] w-6 h-6">
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
              <span className="font-display text-lg font-medium text-white">
                Tiles
                <em className="not-italic" style={{ color: "#D4724D" }}>
                  Gallery
                </em>
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Your curated destination for premium artisan tiles. Discover
              surfaces that tell stories — from Fez to Florence.
            </p>
            {/* Socials */}
            {/* FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn */}
            <div className="flex gap-2 mt-5">
              {[
                {
                  icon: FaFacebookF,
                  href: "https://www.facebook.com/profile.php?id=100093614353745",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/m_aminurr?igsh=dHIybnpvZmQ5cWly&utm_source=qr",
                },
                { icon: FaXTwitter, href: "https://twitter.com/aminurr" },
                {
                  icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/in/aminulislam98/",
                },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-white/10 hover:bg-[#D4724D]"
                >
                  <social.icon size={13} />
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h5
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Explore
            </h5>
            <ul className="space-y-3 list-none p-0 m-0">
              {[
                { href: "/allTiles", label: "All Tiles" },
                { href: "/allTiles?category=ceramic", label: "Ceramic" },
                { href: "/allTiles?category=zellige", label: "Zellige" },
                {
                  href: "/allTiles?category=natural stone",
                  label: "Natural Stone",
                },
                { href: "/allTiles?category=marble", label: "Marble" },
                { href: "/allTiles?category=terracotta", label: "Terracotta" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={`text-sm transition-colors hover:text-[#D4724D] text-[rgba(255,255,255,0.45)] `}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h5
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Company
            </h5>
            <ul className="space-y-3 list-none p-0 m-0">
              {[
                { href: "/about", label: "About Us" },
                { href: "/careers", label: "Careers" },
                { href: "/blog", label: "Blog" },
                {
                  href: "/project",
                  label: "Projects",
                },
                {
                  href: "/privacy",
                  label: "Privacy Policy",
                },
              ].map((item) => (
                <li key={item.label + item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors hover:text-[#D4724D]  ${pathName === item.href ? "text-[#D4724D]" : "text-[rgba(255,255,255,0.45)]"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h5
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Contact Us
            </h5>
            <ul className="space-y-3 list-none p-0 m-0">
              <li
                className="flex items-start gap-2 text-sm"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <HiMail
                  className="mt-0.5 shrink-0 text-[#D4724D] "
                  style={{ color: "#D4724D" }}
                  size={14}
                />
                <a
                  className="hover:text-[#D4724D]"
                  href="mailto:yourname@gmail.com?subject=Hello&body=Hi, I wanted to reach out..."
                >
                  aminul@aminulislam.co.uk
                </a>
              </li>
              <li
                className="flex items-start gap-2 text-sm"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <HiPhone
                  className="mt-0.5 shrink-0"
                  style={{ color: "#D4724D" }}
                  size={14}
                />
                <a className="hover:text-[#D4724D]" href="tel:+441234567890">
                  +441234567890
                </a>
              </li>
              <li
                className="flex items-start gap-2 text-sm"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <HiLocationMarker
                  className="mt-0.5 shrink-0"
                  style={{ color: "#D4724D" }}
                  size={14}
                />

                <a
                  className="hover:text-[#D4724D]"
                  href="https://maps.google.com/?q=Your+Address+London"
                  target="_blank"
                >
                  14 Artisan Way, London, UK
                </a>
              </li>
            </ul>
            <div
              className="mt-5 p-4 rounded-xl"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Hours
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Mon–Fri: 10:00 – 18:00
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Saturday: 11:00 – 16:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2025 Tiles Gallery. All rights reserved.
          </p>
          <div className="flex gap-5">
            {[
              {
                href: "/privacy",
                label: "Privacy Policy",
              },
              {
                href: "/terms",
                label: "Terms",
              },
              {
                href: "/cookies",
                label: "Cookies",
              },
            ].map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="text-xs transition-colors hover:text-[#D4724D] text-[rgba(255,255,255,0.45)] "
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
// "Privacy Policy", "Terms", "Cookies"
