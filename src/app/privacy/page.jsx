import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export const metadata = {
  title: "Privacy Policy | Tiles Gallery",
  description:
    "Read our Privacy Policy to understand how Tiles Gallery collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you browse our website, we may collect basic technical data such as your IP address, browser type, and pages visited. This data is collected automatically via cookies and analytics tools.",
      "When you make an enquiry, place an order or subscribe to our journal, we collect personal information including your name, email address, postal address and phone number.",
      "If you apply for a position with us, we collect the information included in your application such as your CV, cover letter and contact details.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To process and fulfil your orders, including shipping, invoicing and order updates.",
      "To respond to your enquiries and provide customer support.",
      "To send our journal and marketing communications — only where you have given us explicit permission to do so.",
      "To improve our website and services through anonymised analytics data.",
      "To comply with legal obligations where required.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "We use essential cookies to make our website function correctly. These cannot be disabled as the site would not work without them.",
      "We use optional analytics cookies (via Google Analytics) to understand how visitors use our site. These are only set with your consent.",
      "We do not use advertising or tracking cookies. We will never sell your data to third-party advertisers.",
      "You can manage your cookie preferences at any time through our cookie settings panel.",
    ],
  },
  {
    title: "Sharing Your Data",
    content: [
      "We do not sell, rent or trade your personal data to any third parties.",
      "We may share your information with trusted service providers who help us operate our business — such as payment processors, shipping partners and email platforms — but only to the extent necessary to provide their services.",
      "All third-party providers we work with are contractually required to handle your data securely and in accordance with UK GDPR.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law.",
      "Order records are kept for 7 years in line with HMRC requirements.",
      "Marketing preferences and communication history are kept until you unsubscribe or request deletion.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Under UK GDPR, you have the right to access the personal data we hold about you.",
      "You have the right to request correction of inaccurate data, or deletion of your data where there is no legal reason to retain it.",
      "You have the right to object to processing, withdraw consent for marketing at any time, and request data portability.",
      "To exercise any of these rights, please contact us at privacy@tilegallery.com. We will respond within 30 days.",
    ],
  },
  {
    title: "Security",
    content: [
      "We take the security of your personal data seriously. Our website is served over HTTPS and all payment processing is handled by PCI-compliant third-party processors — we never store your card details.",
      "While we implement appropriate technical and organisational measures, no method of transmission over the internet is 100% secure. We encourage you to use a strong password and keep your account details confidential.",
    ],
  },
  {
    title: "Contact & Complaints",
    content: [
      "If you have any questions about this privacy policy or how we handle your data, please contact our Data Controller at privacy@tilegallery.com.",
      "If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-[60px]" style={{ background: "#0F0E0C" }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#B85C38" }}
          >
            Legal
          </p>
          <h1
            className="font-display font-light text-white"
            style={{
              fontSize: "clamp(36px,5vw,64px)",
              letterSpacing: "-2px",
              maxWidth: "560px",
            }}
          >
            Privacy
            <em className="font-light" style={{ color: "#D4724D" }}>
              {" "}
              Policy
            </em>
          </h1>
          <p
            className="text-sm mt-4"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Last updated: 1 April 2025 · Effective immediately
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section
        style={{ background: "#FAF7F2", borderBottom: "1px solid #E4DFD8" }}
        className="py-10"
      >
        <div className="max-w-3xl mx-auto px-4 md:Lpx-6">
          <p className="text-sm leading-relaxed" style={{ color: "#6B6560" }}>
            The Tile Gallery Ltd ("we", "us", "our") is committed to protecting
            your personal information. This policy explains what data we
            collect, how we use it, and your rights under UK GDPR and the Data
            Protection Act 2018. We are registered with the Information
            Commissioner's Office (ICO) under registration number ZB123456.
          </p>
        </div>
      </section>

      {/* ── Policy sections ── */}
      <section style={{ background: "#FAF7F2" }} className=" py-8 md:py-16">
        <div className="max-w-3xl mx-auto px-3  md:px-6">
          {/* Quick nav */}
          <div
            className="rounded-2xl p-6 mb-12"
            style={{ background: "#fff", border: "1px solid #E4DFD8" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#B85C38" }}
            >
              Contents
            </p>
            <ol className="flex flex-col gap-2">
              {sections.map((s, i) => (
                <li key={s.title}>
                  <a
                    href={`#section-${i}`}
                    className="text-sm hover:underline transition-colors"
                    style={{ color: "#6B6560" }}
                  >
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-12">
            {sections.map((s, i) => (
              <div key={s.title} id={`section-${i}`}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span
                    className="font-display font-light text-3xl flex-shrink-0"
                    style={{ color: "#E4DFD8", letterSpacing: "-1px" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className="text-lg font-semibold"
                    style={{ color: "#1A1714" }}
                  >
                    {s.title}
                  </h2>
                </div>
                <div className="flex flex-col gap-3 pl-10">
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
                {i < sections.length - 1 && (
                  <div
                    className="mt-12 h-px"
                    style={{ background: "#E4DFD8" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div
            className="mt-16 p-8 rounded-2xl"
            style={{ background: "#0F0E0C" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#B85C38" }}
            >
              Questions?
            </p>
            <h3
              className="font-display font-light text-white mb-4"
              style={{
                fontSize: "clamp(22px,3vw,32px)",
                letterSpacing: "-0.5px",
              }}
            >
              Get in touch with our team
            </h3>
            <div
              className="flex flex-col gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <span>
                Email:{" "}
                <a
                  href="mailto:privacy@tilegallery.com"
                  className="hover:underline"
                  style={{ color: "#D4724D" }}
                >
                  privacy@tilegallery.com
                </a>
              </span>
              <span>
                The Tile Gallery Ltd, 14 Artisan Quarter, London E2 8HR
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
