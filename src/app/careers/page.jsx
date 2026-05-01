import Image from "next/image";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Link from "next/link";

const perks = [
  {
    title: "Flexible Working",
    desc: "Hybrid model with 2 days in our London studio and remote options for the rest.",
  },
  {
    title: "Travel Budget",
    desc: "Annual sourcing trip allowance to visit our artisan partners across Europe and North Africa.",
  },
  {
    title: "Learning Fund",
    desc: "£1,500 per year for courses, conferences or design education of your choosing.",
  },
  {
    title: "Tile Allowance",
    desc: "Staff discount on all tile orders — because we want you to live beautifully too.",
  },
  {
    title: "28 Days Holiday",
    desc: "Plus bank holidays, birthday day off, and a company-wide winter break.",
  },
  {
    title: "Studio Culture",
    desc: "Monthly team lunches, quarterly design field trips and a genuinely supportive team.",
  },
];

const roles = [
  {
    title: "Senior Interior Design Consultant",
    type: "Full-time",
    location: "London, Hybrid",
    dept: "Design",
    desc: "Work directly with high-end residential and commercial clients to specify tile schemes from our collection. You will manage projects from concept through to installation.",
  },
  {
    title: "Tile Sourcing & Procurement Specialist",
    type: "Full-time",
    location: "London + Travel",
    dept: "Sourcing",
    desc: "Build and manage relationships with artisan producers across Morocco, Portugal, Italy and Spain. Identify new makers and negotiate supply agreements.",
  },
  {
    title: "E-Commerce & Digital Marketing Manager",
    type: "Full-time",
    location: "Remote / London",
    dept: "Marketing",
    desc: "Lead our digital presence across web, social and email. Drive traffic to our online gallery and grow our direct-to-consumer channel.",
  },
  {
    title: "Logistics & Operations Coordinator",
    type: "Full-time",
    location: "London",
    dept: "Operations",
    desc: "Oversee import logistics, stock management and order fulfilment. Ensure tiles arrive perfectly and on time for every project.",
  },
  {
    title: "Junior Design Assistant",
    type: "Part-time",
    location: "London Studio",
    dept: "Design",
    desc: "Support our design consultants with client presentations, sample preparation and project administration. Ideal for recent graduates.",
  },
];

const deptColors = {
  Design: { bg: "rgba(184,92,56,0.1)", text: "#B85C38" },
  Sourcing: { bg: "rgba(90,130,100,0.1)", text: "#4A7A5A" },
  Marketing: { bg: "rgba(80,100,160,0.1)", text: "#4A64A0" },
  Operations: { bg: "rgba(120,100,60,0.1)", text: "#786432" },
};

export default function CareersPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-[60px]">
        <div className="relative h-[600px] md:h-[680px]">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=90"
            alt="Careers at Tile Gallery"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(12,10,8,0.30) 0%, rgba(12,10,8,0.55) 50%, rgba(12,10,8,0.85) 100%)",
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
              Join Us · 5 Open Roles
            </p>
            <h1
              className="font-display font-light text-white leading-[1.05] mb-5"
              style={{
                fontSize: "clamp(44px,6vw,80px)",
                letterSpacing: "-2.5px",
                maxWidth: "700px",
              }}
            >
              Build a career around
              <br />
              <em className="font-light" style={{ color: "#D4724D" }}>
                beautiful things.
              </em>
            </h1>
            <p
              className="text-sm font-light leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.55)", maxWidth: "460px" }}
            >
              We are 22 people who genuinely love what we do — and we are always
              looking for talented people who share our obsession with craft.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#roles"
                className="inline-block px-7 py-3.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-80"
                style={{ background: "#B85C38" }}
              >
                View Open Roles
              </Link>
              <Link
                href="mailto:careers@tilegallery.com"
                className="inline-block px-7 py-3.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "#fff",
                }}
              >
                Send a Speculative CV
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STUDIO SPLIT ── */}
      <section style={{ background: "#FAF7F2" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#B85C38" }}
            >
              Why Work Here
            </p>
            <h2
              className="font-display font-light leading-tight mb-6"
              style={{
                fontSize: "clamp(32px,4vw,52px)",
                letterSpacing: "-1.5px",
                color: "#1A1714",
              }}
            >
              A small team with a big obsession
            </h2>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#6B6560" }}
            >
              We are not a corporate. We are 22 people who travel to tile
              factories in Morocco, argue passionately about grout colours and
              genuinely care about the spaces our tiles end up in.
            </p>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "#6B6560" }}
            >
              If you want a career that connects craft, design and commerce —
              and you want to work somewhere your taste and curiosity are valued
              — this might be the right place for you.
            </p>
            <blockquote
              className="pl-5 py-1"
              style={{ borderLeft: "3px solid #B85C38" }}
            >
              <p
                className="font-display font-light italic"
                style={{
                  fontSize: "clamp(17px,2vw,22px)",
                  color: "#1A1714",
                  letterSpacing: "-0.5px",
                }}
              >
                "We hire people who would rather touch a tile than read a
                spreadsheet."
              </p>
              <cite
                className="block text-xs uppercase tracking-widest mt-2 not-italic"
                style={{ color: "#B85C38" }}
              >
                — Isabelle Fontaine, Founder
              </cite>
            </blockquote>
          </div>
          {/* Layered photo */}
          <div className="relative h-[420px] mt-10 md:mt-0">
            <div className="relative h-full rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
                alt="The studio team"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 w-44 h-44 rounded-2xl overflow-hidden"
              style={{ border: "4px solid #FAF7F2" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?w=400&q=85"
                alt="Studio workspace"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>
            <div
              className="absolute -top-5 -right-5 w-24 h-24 rounded-full flex flex-col items-center justify-center text-center"
              style={{ background: "#B85C38" }}
            >
              <p className="font-display text-white text-2xl font-light leading-none">
                22
              </p>
              <p className="text-white text-[9px] uppercase tracking-wider leading-tight mt-1">
                People
                <br />& Counting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section style={{ background: "#F2EDE6" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3 text-center"
            style={{ color: "#B85C38" }}
          >
            What We Offer
          </p>
          <h2
            className="font-display font-light text-center mb-14"
            style={{
              fontSize: "clamp(28px,3.5vw,44px)",
              letterSpacing: "-1px",
              color: "#1A1714",
            }}
          >
            Perks & Benefits
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <div
                key={perk.title}
                className="p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
                style={{ background: "#fff", border: "1px solid #E4DFD8" }}
              >
                <p
                  className="font-display font-light text-5xl mb-5"
                  style={{ color: "#F2EDE6", letterSpacing: "-1px" }}
                >
                  0{i + 1}
                </p>
                <div
                  className="w-8 h-0.5 mb-4"
                  style={{ background: "#B85C38" }}
                />
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: "#1A1714" }}
                >
                  {perk.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B6560" }}
                >
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="roles" style={{ background: "#FAF7F2" }} className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3 text-center"
            style={{ color: "#B85C38" }}
          >
            Open Positions
          </p>
          <h2
            className="font-display font-light text-center mb-14"
            style={{
              fontSize: "clamp(28px,3.5vw,44px)",
              letterSpacing: "-1px",
              color: "#1A1714",
            }}
          >
            Current Vacancies
          </h2>
          <div className="flex flex-col gap-4">
            {roles.map((role) => (
              <div
                key={role.title}
                className="p-7 rounded-2xl hover:-translate-y-0.5 transition-transform duration-300"
                style={{ background: "#fff", border: "1px solid #E4DFD8" }}
              >
                <div className="flex flex-wrap items-start gap-3 mb-3">
                  <h3
                    className="font-display font-light flex-1"
                    style={{
                      fontSize: "clamp(18px,2vw,22px)",
                      letterSpacing: "-0.5px",
                      color: "#1A1714",
                    }}
                  >
                    {role.title}
                  </h3>
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider flex-shrink-0"
                    style={{
                      background: deptColors[role.dept]?.bg,
                      color: deptColors[role.dept]?.text,
                    }}
                  >
                    {role.dept}
                  </span>
                </div>
                <div
                  className="flex flex-wrap gap-4 text-xs mb-4"
                  style={{ color: "#9E9891" }}
                >
                  <span>{role.type}</span>
                  <span
                    className="w-1 h-1 rounded-full self-center"
                    style={{ background: "#C4BEB6" }}
                  />
                  <span>{role.location}</span>
                </div>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "#6B6560" }}
                >
                  {role.desc}
                </p>
                <div
                  className="w-8 h-0.5 mb-5"
                  style={{ background: "#E4DFD8" }}
                />
                <Link
                  href={`mailto:careers@tilegallery.com?subject=Application: ${role.title}`}
                  className="inline-block px-6 py-3 rounded-xl text-xs font-semibold text-white transition-opacity hover:opacity-80"
                  style={{ background: "#B85C38" }}
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — full photo background ── */}
      <section className="relative py-32 text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1800&q=85"
          alt="Artisan tile work"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(12,10,8,0.78)" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#B85C38" }}
          >
            Don't See Your Role?
          </p>
          <h2
            className="font-display font-light text-white mb-4"
            style={{
              fontSize: "clamp(32px,4.5vw,56px)",
              letterSpacing: "-1.5px",
            }}
          >
            Send us a speculative application
          </h2>
          <p
            className="text-sm font-light mb-8"
            style={{
              color: "rgba(255,255,255,0.45)",
              maxWidth: "400px",
              margin: "0 auto 2rem",
            }}
          >
            We are always interested in meeting talented people who share our
            passion for craft and design.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="mailto:careers@tilegallery.com"
              className="inline-block px-8 py-4 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-80"
              style={{ background: "#B85C38" }}
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="inline-block px-8 py-4 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
              }}
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
