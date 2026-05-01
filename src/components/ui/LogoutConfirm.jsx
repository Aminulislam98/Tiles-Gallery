"use client";
import { RiLogoutBoxLine } from "react-icons/ri";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LogoutModal({ isOpen, onClose }) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleLogout = async () => {
    await authClient.signOut();
    onClose();
    toast.success("Signed out!");
    router.push("/");
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-[340px] mx-4 rounded-2xl p-6"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: "rgba(192,57,43,0.15)" }}
          >
            <RiLogoutBoxLine size={22} style={{ color: "#C0392B" }} />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-center font-semibold text-white text-lg mb-2">
          Sign out?
        </h2>
        <p
          className="text-center text-sm mb-6"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          You will need to sign in again to access your account.
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-70"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80"
            style={{ background: "#C0392B" }}
          >
            Yes, sign out
          </button>
        </div>
      </div>
    </div>
  );
}
