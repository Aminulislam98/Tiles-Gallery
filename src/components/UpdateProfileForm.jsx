"use client";

import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import toast from "react-hot-toast";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { authClient } from "@/lib/auth-client";
import { Form } from "@heroui/react";
import { useRouter } from "next/navigation";
import FadeUp from "./ui/FadeUp";

export default function UpdateProfileForm() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return url.startsWith("http://") || url.startsWith("https://");
    } catch {
      return false;
    }
  };

  const isValidName = (name) => /[a-zA-Z]/.test(name);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    if (!isValidName(name)) {
      toast.error("Name must contain at least one letter!");
      return;
    }

    const validImage = image && isValidUrl(image) ? image : null;
    const nameChanged = name !== session?.user?.name;

    if (!nameChanged && !validImage) {
      toast("Nothing changed!", {
        icon: "💡",
        style: {
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          border: "1px solid rgba(251,191,36,0.3)",
          borderRadius: "12px",
          padding: "8px 12px",
          fontSize: "13px",
          fontWeight: "600",
          color: "#92400E",
        },
      });
      return;
    }

    const updatePayload = validImage ? { name, image: validImage } : { name };
    const { error } = await authClient.updateUser(updatePayload);

    if (error) {
      toast.error("Failed to update profile. Please try again.");
      return;
    }

    const updatedName = name?.split(" ")[0] || "there";

    // ✅ success toast
    toast.success(
      validImage ? `Profile updated! Welcome, ${updatedName}` : `Name updated!`,
    );

    if (!validImage) {
      setTimeout(() => {
        toast.error(
          image && !validImage
            ? "Image not changed — invalid URL provided"
            : "Image not changed — no image provided",
        );
      }, 700);
    }

    setTimeout(() => router.push("/profile"), 1500);
  };

  return (
    <>
      <Navbar />
      <FadeUp>
        <main
          className="md:pt-15 min-h-screen flex items-center justify-center px-4 py-10 md:py-20"
          style={{ background: "#F9F6F1" }}
        >
          <div className="w-full max-w-md">
            <Link
              href="/profile"
              className="flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-70"
              style={{ color: "#8C8880" }}
            >
              <HiArrowLeft size={14} /> Back to Profile
            </Link>

            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ background: "rgba(184,92,56,0.1)", color: "#B85C38" }}
            >
              Edit Profile
            </span>

            <h1
              className="font-display font-light leading-tight mb-2"
              style={{
                fontSize: "42px",
                color: "#0F0E0C",
                letterSpacing: "-1px",
              }}
            >
              Update Info
            </h1>
            <p
              className="text-sm font-light mb-10"
              style={{ color: "#8C8880" }}
            >
              Change your display name and profile photo.
            </p>

            <div
              className="rounded-2xl p-8"
              style={{ background: "#fff", border: "1px solid #E4DFD8" }}
            >
              <Form onSubmit={handleUpdate} className="space-y-5">
                <div>
                  <label
                    className="block text-xs font-semibold mb-2"
                    style={{ color: "#3A3835" }}
                  >
                    Display Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    defaultValue={session?.user?.name || ""}
                    placeholder="Your display name"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: "#F9F6F1",
                      border: "1.5px solid #E4DFD8",
                      color: "#0F0E0C",
                    }}
                  />
                  <p className="text-xs mt-1.5" style={{ color: "#8C8880" }}>
                    Must contain at least one letter.
                  </p>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-2"
                    style={{ color: "#3A3835" }}
                  >
                    Image URL
                    <span
                      className="text-xs font-normal ml-1"
                      style={{ color: "#8C8880" }}
                    >
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="https://..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: "#F9F6F1",
                      border: "1.5px solid #E4DFD8",
                      color: "#0F0E0C",
                    }}
                  />
                  <p className="text-xs mt-1.5" style={{ color: "#8C8880" }}>
                    Must start with https:// — leave empty to keep current
                    photo.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50"
                  style={{ background: "#0F0E0C" }}
                >
                  Update Profile
                </button>
              </Form>
            </div>
          </div>
        </main>
      </FadeUp>
      <Footer />
    </>
  );
}
