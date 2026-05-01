import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Link from "next/link";
import Image from "next/image";

const cookieTypes = [
  {
    type: "Essential",
    required: true,
    desc: "These cookies are strictly necessary for the website to function. They cannot be disabled.",
    examples: [
      {
        name: "session_id",
        purpose: "Keeps you logged in during your visit",
        expires: "Session",
      },
      {
        name: "csrf_token",
        purpose: "Protects against cross-site request forgery",
        expires: "Session",
      },
      {
        name: "cart",
        purpose: "Remembers items in your shopping basket",
        expires: "7 days",
      },
    ],
  },
  {
    type: "Analytics",
    required: false,
    desc: "These cookies help us understand how visitors interact with our website so we can improve it.",
    examples: [
      {
        name: "_ga",
        purpose: "Google Analytics — distinguishes users",
        expires: "2 years",
      },
      {
        name: "_gid",
        purpose: "Google Analytics — distinguishes users",
        expires: "24 hours",
      },
      {
        name: "_gat",
        purpose: "Google Analytics — throttles request rate",
        expires: "1 minute",
      },
    ],
  },
  {
    type: "Preferences",
    required: false,
    desc: "These cookies remember your settings and preferences to personalise your experience.",
    examples: [
      {
        name: "currency",
        purpose: "Remembers your preferred currency",
        expires: "1 year",
      },
      {
        name: "cookie_consent",
        purpose: "Stores your cookie preferences",
        expires: "1 year",
      },
    ],
  },
];

const sections = [
  {
    title: "What Are Cookies?",
    content: [
      "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work, or work more efficiently, and to provide information to the website owner.",
      "Cookies do not contain any personally identifiable information on their own, though they may be linked to personal data we hold about you in other contexts.",
    ],
  },
  {
    title: "How We Use Cookies",
    content: [
      "We use cookies to make our website function correctly, to understand how you use our site, and to remember your preferences.",
      "We do not use cookies for advertising or to track you across other websites. We will never sell cookie data to third parties.",
    ],
  },
  {
    title: "Managing Your Cookies",
    content: [
      "You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your experience on our website — some features may not work correctly without essential cookies.",
      "Most browsers allow you to refuse cookies, delete existing cookies, and set preferences for specific websites. Instructions for managing cookies in common browsers can be found on each browser's help pages.",
      "To opt out of Google Analytics tracking specifically, you can install the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout.",
    ],
  },
  {
    title: "Third-Party Cookies",
    content: [
      "Some cookies on our site are set by third-party services we use, such as Google Analytics. We have no direct control over these cookies — please refer to the respective privacy policies of these providers for more information.",
      "We do not permit third-party advertising cookies on our website.",
    ],
  },
  {
    title: "Updates to This Policy",
    content: [
      "We may update this Cookie Policy from time to time to reflect changes in technology, law, or our use of cookies. Any changes will be posted on this page with an updated date.",
      "We encourage you to check this page periodically to stay informed about our use of cookies.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-[60px]">
        <div className="relative h-[420px] md:h-[480px]">
          <Image
            src="https://www.hrjohnsonindia.com/assets/images/blog/marble-stones.jpg"
            alt="Cookie Policy"
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
              Cookie
              <em className="font-light" style={{ color: "#D4724D" }}>
                {" "}
                Policy
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
            This Cookie Policy explains how The Tile Gallery Ltd uses cookies
            and similar tracking technologies on our website. It should be read
            alongside our Privacy Policy and Terms of Service. By continuing to
            use our site, you consent to our use of cookies as described here.
          </p>
        </div>
      </section>

      {/* ── COOKIE TYPES TABLE ── */}
      <section style={{ background: "#F2EDE6" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3 text-center"
            style={{ color: "#B85C38" }}
          >
            Cookie Types
          </p>
          <h2
            className="font-display font-light text-center mb-14"
            style={{
              fontSize: "clamp(28px,3.5vw,44px)",
              letterSpacing: "-1px",
              color: "#1A1714",
            }}
          >
            Cookies we use
          </h2>
          <div className="flex flex-col gap-8">
            {cookieTypes.map((ct, i) => (
              <div
                key={ct.type}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid #E4DFD8" }}
              >
                {/* Header */}
                <div
                  className="flex items-center justify-between px-7 py-5"
                  style={{
                    background: "#fff",
                    borderBottom: "1px solid #E4DFD8",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="font-display font-light"
                      style={{
                        fontSize: "clamp(28px,3vw,36px)",
                        color: "#E4DFD8",
                        letterSpacing: "-1px",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="font-display font-light"
                        style={{
                          fontSize: "clamp(18px,2vw,24px)",
                          letterSpacing: "-0.5px",
                          color: "#1A1714",
                        }}
                      >
                        {ct.type} Cookies
                      </h3>
                      <p className="text-sm mt-1" style={{ color: "#6B6560" }}>
                        {ct.desc}
                      </p>
                    </div>
                  </div>
                  <span
                    className="flex-shrink-0 ml-4 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      background: ct.required
                        ? "rgba(184,92,56,0.1)"
                        : "rgba(90,130,100,0.1)",
                      color: ct.required ? "#B85C38" : "#4A7A5A",
                    }}
                  >
                    {ct.required ? "Always On" : "Optional"}
                  </span>
                </div>
                {/* Table */}
                <div style={{ background: "#FAF7F2" }}>
                  <div
                    className="grid grid-cols-3 px-7 py-3 text-[10px] font-semibold uppercase tracking-widest"
                    style={{
                      color: "#9E9891",
                      borderBottom: "1px solid #E4DFD8",
                    }}
                  >
                    <span>Cookie Name</span>
                    <span>Purpose</span>
                    <span>Expires</span>
                  </div>
                  {ct.examples.map((ex, j) => (
                    <div
                      key={ex.name}
                      className="grid grid-cols-3 px-7 py-4 text-sm"
                      style={{
                        borderBottom:
                          j < ct.examples.length - 1
                            ? "1px solid #E4DFD8"
                            : "none",
                        color: "#6B6560",
                      }}
                    >
                      <span
                        className="font-mono text-xs"
                        style={{ color: "#1A1714" }}
                      >
                        {ex.name}
                      </span>
                      <span>{ex.purpose}</span>
                      <span style={{ color: "#B85C38" }}>{ex.expires}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POLICY SECTIONS ── */}
      <section style={{ background: "#FAF7F2" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Sticky sidebar */}
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
                href="/terms"
                className="text-xs uppercase tracking-wider hover:underline"
                style={{ color: "#B85C38" }}
              >
                Terms of Service →
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
                Questions About Cookies?
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
                    href="mailto:privacy@tilegallery.com"
                    className="hover:underline"
                    style={{ color: "#D4724D" }}
                  >
                    privacy@tilegallery.com
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
