import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function Footer() {
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
            <div className="flex gap-2 mt-5">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    <Icon size={13} />
                  </a>
                ),
              )}
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
                "All Tiles",
                "Ceramic",
                "Zellige",
                "Natural Stone",
                "Marble",
                "Outdoor",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/all-tiles"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {item}
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
              {["About Us", "Projects", "Blog", "Careers", "Privacy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
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
                  className="mt-0.5 shrink-0"
                  style={{ color: "#D4724D" }}
                  size={14}
                />
                aminul@aminulislam.co.uk
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
                +44 20 7946 0000
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
                14 Artisan Way, London, UK
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
            {["Privacy Policy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
