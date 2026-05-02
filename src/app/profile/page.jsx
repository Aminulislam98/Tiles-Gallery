import LogoutButton from "@/components/LogoutButton";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { HiPencil, HiMail, HiCalendar, HiStar } from "react-icons/hi";

export const metadata = {
  title: "Profile | Tiles Gallery",
  description:
    "View and edit your profile information, including name, email, and account details. Manage your Tiles Gallery account settings and preferences.",
};

export default async function MyProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const { name, email, image } = session?.user || {};

  console.log("image:", image); // 👈 check what value this is

  if (!session) {
    redirect("/login");
  }

  const loginDate = new Date(session?.session?.createdAt).toLocaleDateString(
    "en-GB",
    {
      dateStyle: "medium",
      timeZone: "Europe/London",
    },
  );

  const initials = name
    ? name
        .trim()
        .split(/\s+/)
        .map((word) => word[0].toUpperCase())
        .join("")
    : "G";
  return (
    <>
      <Navbar />
      <main
        className="pt-[60px] min-h-screen"
        style={{ background: "#F9F6F1" }}
      >
        <div className="max-w-3xl mx-auto px-3 py-8  md:py-16">
          {/* ── Profile header card ── */}
          <div
            className="rounded-3xl p-4 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-7 mb-5"
            style={{ background: "#fff", border: "1px solid #E4DFD8" }}
          >
            {/* Avatar */}
            {image ? (
              <div className="bg-[#B85C38] p-1 rounded-full">
                <Image
                  src={image}
                  alt={name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover shrink-0"
                />
              </div>
            ) : (
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-white font-display text-4xl font-medium shrink-0"
                style={{
                  background: "linear-gradient(135deg, #B85C38, #8A3D22)",
                  boxShadow: "0 0 0 4px #F9F6F1, 0 0 0 6px #B85C38",
                }}
              >
                {initials}
              </div>
            )}

            {/* Info */}
            <div className="flex-1">
              <h1
                className="font-display text-2xl font-medium leading-tight mb-1"
                style={{ color: "#0F0E0C" }}
              >
                {name}
              </h1>
              <p
                className="text-sm mb-3 flex items-center gap-1.5"
                style={{ color: "#8C8880" }}
              >
                <HiMail size={13} /> {email}
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(184,92,56,0.1)",
                    color: "#B85C38",
                  }}
                >
                  Premium
                </span>
                {/* <span
                  className="px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                  style={{ background: "#E4DFD8", color: "#8C8880" }}
                >
                  <HiStar size={11} /> {mockUser.savedTiles} Saved Tiles
                </span> */}
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                  style={{ background: "#E4DFD8", color: "#8C8880" }}
                >
                  <HiCalendar size={11} /> Since {loginDate}
                </span>
              </div>
            </div>

            {/* Edit button */}
            <Link
              href="/update-profile"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors hover:opacity-80 shrink-0 w-full sm:w-auto justify-center"
              style={{
                border: "1.5px solid #B85C38",
                color: "#B85C38",
              }}
            >
              <HiPencil size={14} /> Edit Profile
            </Link>
            <div className="w-full sm:hidden">
              <LogoutButton></LogoutButton>
            </div>
          </div>

          {/* ── Account info card ── */}
          <div
            className="rounded-2xl p-7 mb-5"
            style={{ background: "#fff", border: "1px solid #E4DFD8" }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "#8C8880" }}
            >
              Account Information
            </p>
            {[
              ["Name", name],
              ["Email", email],
              ["Member Since", loginDate],
              ["Account Type", "Premium"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between items-center py-3.5 text-sm"
                style={{ borderBottom: "1px solid #E4DFD8" }}
              >
                <span style={{ color: "#8C8880" }}>{label}</span>
                <span className="font-medium" style={{ color: "#0F0E0C" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* ── Update info card ── */}
          <div
            className="rounded-2xl p-7"
            style={{ background: "#fff", border: "1px solid #E4DFD8" }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "#8C8880" }}
            >
              Update Information
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <label
                  className="block text-xs font-semibold mb-2"
                  style={{ color: "#3A3835" }}
                >
                  Display Name
                </label>
                <input
                  type="text"
                  defaultValue={name}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{
                    background: "#F9F6F1",
                    border: "1.5px solid #E4DFD8",
                    color: "#0F0E0C",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold mb-2"
                  style={{ color: "#3A3835" }}
                >
                  Photo URL
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  defaultValue={image}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{
                    background: "#F9F6F1",
                    border: "1.5px solid #E4DFD8",
                    color: "#0F0E0C",
                  }}
                />
              </div>
            </div>
            <Link
              href="/update-profile"
              className="px-8 py-3 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-80"
              style={{ background: "#0F0E0C" }}
            >
              Update Information
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
