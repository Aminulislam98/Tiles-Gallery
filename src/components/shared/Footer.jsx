// src/components/layout/Footer.js
// No "use client" needed — pure static design

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-8">
        {/* ── Top 4-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1.4fr] gap-12 mb-16">
          {/* Brand column */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="grid grid-cols-2 gap-[3px] w-7 h-7">
                <span className="rounded-[3px] bg-terra block" />
                <span className="rounded-[3px] bg-gold block" />
                <span className="rounded-[3px] bg-gold block" />
                <span className="rounded-[3px] bg-terra block" />
              </div>
              <span className="font-display text-[20px] text-white font-medium">
                Tiles<em className="text-terra2 not-italic">Gallery</em>
              </span>
            </Link>

            <p className="font-display text-[16px] font-light leading-relaxed text-white/35 max-w-[280px]">
              Your curated destination for premium artisan tiles. Discover
              surfaces that tell stories — from Fez to Florence, Kyoto to
              Copenhagen.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 mt-6">
              {[
                { Icon: FaFacebookF, href: "#" },
                { Icon: FaInstagram, href: "#" },
                { Icon: FaXTwitter, href: "#" },
                { Icon: FaLinkedinIn, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center text-white/40 hover:bg-terra hover:text-white transition-all duration-200"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h5 className="text-[11px] font-semibold tracking-[1.4px] uppercase text-white/25 mb-5">
              Explore
            </h5>
            <ul className="space-y-3 list-none">
              {[
                "All Tiles",
                "Ceramic",
                "Zellige",
                "Natural Stone",
                "Outdoor",
                "Marble",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/all-tiles"
                    className="text-[13.5px] text-white/45 hover:text-terra2 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h5 className="text-[11px] font-semibold tracking-[1.4px] uppercase text-white/25 mb-5">
              Company
            </h5>
            <ul className="space-y-3 list-none">
              {[
                "About Us",
                "Projects",
                "Blog",
                "Careers",
                "Press",
                "Privacy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[13.5px] text-white/45 hover:text-terra2 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[11px] font-semibold tracking-[1.4px] uppercase text-white/25 mb-5">
              Contact Us
            </h5>
            <ul className="space-y-4 list-none">
              <li className="flex items-start gap-3">
                <HiMail className="text-terra2 mt-0.5 shrink-0" size={15} />
                <span className="text-[13.5px] text-white/45">
                  hello@tilesgallery.co
                </span>
              </li>
              <li className="flex items-start gap-3">
                <HiPhone className="text-terra2 mt-0.5 shrink-0" size={15} />
                <span className="text-[13.5px] text-white/45">
                  +44 20 7946 0000
                </span>
              </li>
              <li className="flex items-start gap-3">
                <HiLocationMarker
                  className="text-terra2 mt-0.5 shrink-0"
                  size={15}
                />
                <span className="text-[13.5px] text-white/45">
                  14 Artisan Way, London, UK
                </span>
              </li>
            </ul>
            {/* Opening hours box */}
            <div className="mt-6 p-4 border border-white/[0.08] rounded-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[1px] text-white/25 mb-1">
                Opening Hours
              </p>
              <p className="text-[13px] text-white/40">
                Mon–Fri: 10:00 – 18:00
              </p>
              <p className="text-[13px] text-white/40">
                Saturday: 11:00 – 16:00
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.08] pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-white/30">
            © 2025 Tiles Gallery. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[12.5px] text-white/30 hover:text-white/60 transition-colors"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
