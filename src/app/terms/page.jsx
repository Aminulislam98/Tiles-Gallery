import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Link from "next/link";
import Image from "next/image";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using The Tile Gallery website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
      "If you do not agree with any part of these terms, you may not use our services. We reserve the right to update these terms at any time — continued use of our site following any changes constitutes your acceptance of the revised terms.",
    ],
  },
  {
    title: "Use of Our Website",
    content: [
      "You may use our website for lawful purposes only. You must not use our site in any way that breaches any applicable local, national or international law or regulation.",
      "You must not misuse our site by knowingly introducing viruses, trojans, worms or other material that is malicious or technologically harmful.",
      "You must not attempt to gain unauthorised access to our site, the server on which our site is stored, or any server, computer or database connected to our site.",
    ],
  },
  {
    title: "Orders & Purchases",
    content: [
      "All orders placed through our website are subject to acceptance and availability. We reserve the right to refuse any order at our sole discretion.",
      "Prices are listed in GBP and are inclusive of VAT where applicable. We reserve the right to change prices at any time without notice.",
      "Once an order is confirmed, you will receive an email confirmation. This confirmation does not constitute a contract until we have dispatched your goods.",
      "We accept returns within 30 days of delivery for unused tiles in original packaging. Custom or cut tiles are non-returnable unless faulty.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content on this website — including images, text, graphics, logos and tile photography — is owned by or licensed to The Tile Gallery Ltd and is protected by copyright law.",
      "You may not reproduce, distribute, or create derivative works from any content on this site without our express written permission.",
      "Our tile names, brand identity and logo are trademarks of The Tile Gallery Ltd and may not be used without prior written consent.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, The Tile Gallery Ltd excludes all liability for any loss or damage arising from your use of our website or services.",
      "We do not guarantee that our website will always be available, uninterrupted or error-free. We will not be liable for any loss caused by a virus, distributed denial-of-service attack, or other technologically harmful material.",
      "Nothing in these terms limits or excludes our liability for death or personal injury caused by our negligence, or for fraud or fraudulent misrepresentation.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These terms are governed by and construed in accordance with the laws of England and Wales.",
      "Any disputes arising from these terms or your use of our website shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-[60px]">
        <div className="relative h-[420px] md:h-[480px]">
          <Image
            src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1800&q=90"
            alt="Terms of Service"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(12,10,8,0.50) 0%, rgba(12,10,8,0.70) 50%, rgba(12,10,8,0.92) 100%)",
            }}
          />
          <div
            className="absolute left-12 top-1/4 bottom-16 w-px hidden md:block"
            style={{ background: "rgba(184,92,56,0.4)" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-16 md:pb-20">
            <p
              className="text-xs font-semibold uppercase tracking-[4px] mb-4"
              style={{ color: "#B85C38" }}
            >
              Legal · Last Updated April 2025
            </p>
            <h1
              className="font-display font-light text-white leading-[1.05]"
              style={{
                fontSize: "clamp(44px,6vw,80px)",
                letterSpacing: "-2.5px",
                maxWidth: "600px",
              }}
            >
              Terms of
              <em className="font-light" style={{ color: "#D4724D" }}>
                {" "}
                Service
              </em>
            </h1>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section
        style={{
          background: "#0F0E0C",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
        className="py-10"
      >
        <div className="max-w-4xl mx-auto px-6">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Please read these Terms of Service carefully before using The Tile
            Gallery website or placing an order. These terms set out the legal
            agreement between you and The Tile Gallery Ltd (company number
            05812347), registered in England and Wales at 14 Artisan Quarter,
            London E2 8HR.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: "#FAF7F2" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Sticky contents nav */}
          <aside className="hidden lg:block sticky top-24">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#B85C38" }}
            >
              Contents
            </p>
            <div className="flex flex-col gap-1">
              {sections.map((s, i) => (
                <Link
                  key={s.title}
                  href={`#section-${i}`}
                  className="text-sm py-2 transition-colors hover:text-[#B85C38]"
                  style={{
                    color: "#6B6560",
                    borderBottom: "0.5px solid #E4DFD8",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}. {s.title}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <Link
                href="/privacy"
                className="text-xs uppercase tracking-wider hover:underline"
                style={{ color: "#B85C38" }}
              >
                Privacy Policy →
              </Link>
              <Link
                href="/cookies"
                className="text-xs uppercase tracking-wider hover:underline"
                style={{ color: "#B85C38" }}
              >
                Cookie Policy →
              </Link>
            </div>
          </aside>

          {/* Sections */}
          <div className="flex flex-col gap-14">
            {sections.map((s, i) => (
              <div key={s.title} id={`section-${i}`}>
                <div className="flex items-baseline gap-4 mb-5">
                  <span
                    className="font-display font-light flex-shrink-0"
                    style={{
                      fontSize: "clamp(28px,3vw,38px)",
                      color: "#E4DFD8",
                      letterSpacing: "-1px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className="font-display font-light"
                    style={{
                      fontSize: "clamp(20px,2.2vw,26px)",
                      letterSpacing: "-0.5px",
                      color: "#1A1714",
                    }}
                  >
                    {s.title}
                  </h2>
                </div>
                <div
                  className="w-8 h-0.5 mb-5 ml-14"
                  style={{ background: "#B85C38" }}
                />
                <div className="flex flex-col gap-3 ml-14">
                  {s.content.map((para, j) => (
                    <p
                      key={j}
                      className="text-sm leading-relaxed"
                      style={{ color: "#6B6560" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact card */}
            <div
              className="p-8 rounded-2xl mt-4"
              style={{ background: "#0F0E0C" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#B85C38" }}
              >
                Questions About These Terms?
              </p>
              <h3
                className="font-display font-light text-white mb-4"
                style={{
                  fontSize: "clamp(22px,2.5vw,32px)",
                  letterSpacing: "-0.5px",
                }}
              >
                We are happy to help
              </h3>
              <div
                className="w-8 h-0.5 mb-5"
                style={{ background: "#B85C38" }}
              />
              <div
                className="flex flex-col gap-2 text-sm"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                <span>
                  Email:{" "}
                  <Link
                    href="mailto:legal@tilegallery.com"
                    className="hover:underline"
                    style={{ color: "#D4724D" }}
                  >
                    legal@tilegallery.com
                  </Link>
                </span>
                <span>
                  The Tile Gallery Ltd, 14 Artisan Quarter, London E2 8HR
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=85"
          alt="Indoor tile floor"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(12,10,8,0.80)" }}
        />
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#B85C38" }}
          >
            Back to the Good Stuff
          </p>
          <h2
            className="font-display font-light text-white mb-8"
            style={{
              fontSize: "clamp(28px,4vw,48px)",
              letterSpacing: "-1.5px",
            }}
          >
            Explore our tile collection
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/allTiles"
              className="inline-block px-8 py-4 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-80"
              style={{ background: "#B85C38" }}
            >
              Browse the Gallery
            </Link>
            <Link
              href="/"
              className="inline-block px-8 py-4 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
              }}
            >
              Go Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
