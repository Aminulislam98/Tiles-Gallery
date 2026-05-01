"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import { HiExclamationTriangle } from "react-icons/hi2";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LogoutModal({ isOpen, onClose }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const handleLogout = async () => {
    await authClient.signOut();
    onClose();
    toast.success("Logged out!");
    router.push("/");
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      style={{
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background: "rgba(15,14,12,0.65)",
      }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-[400px] rounded-3xl overflow-hidden"
        style={{
          background: "#161412",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.6), 0 12px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top danger accent */}
        <div
          className="h-[2px] w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #dc2626 30%, #ef4444 60%, transparent 100%)",
          }}
        />

        <div className="p-8">
          {/* Warning icon */}
          <div className="flex justify-center mb-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
              style={{
                background:
                  "linear-gradient(145deg, rgba(220,38,38,0.15), rgba(220,38,38,0.04))",
                border: "1px solid rgba(220,38,38,0.25)",
                boxShadow: "0 0 24px rgba(220,38,38,0.12)",
              }}
            >
              <HiExclamationTriangle size={26} style={{ color: "#ef4444" }} />
            </div>
          </div>

          {/* Heading */}
          <h2
            className="text-center font-display font-light text-[26px] tracking-tight mb-2"
            style={{ color: "#F9F6F1" }}
          >
            Sign out?
          </h2>

          {/* Subtext */}
          <p
            className="text-center text-sm leading-relaxed mb-7"
            style={{ color: "rgba(249,246,241,0.38)" }}
          >
            You'll be logged out of your session. Any unsaved preferences will
            be lost.
          </p>

          {/* Divider */}
          <div
            className="w-full h-px mb-7"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
            }}
          />

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            {/* Danger sign out button */}
            <button
              onClick={handleLogout}
              className="w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.98] relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
                color: "#fff",
                boxShadow:
                  "0 4px 24px rgba(220,38,38,0.45), 0 1px 0 rgba(255,255,255,0.1) inset",
              }}
            >
              {/* shine layer */}
              <span
                className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 60%)",
                }}
              />
              <span className="relative flex items-center justify-center gap-2">
                <RiLogoutBoxLine size={15} />
                Yes, sign me out
              </span>
            </button>

            {/* Cancel */}
            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-70 active:scale-[0.98]"
              style={{
                background: "rgba(255,255,255,0.04)",
                color: "rgba(249,246,241,0.5)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              Cancel
            </button>
          </div>

          {/* Bottom note */}
          <p
            className="text-center text-xs mt-5"
            style={{ color: "rgba(249,246,241,0.18)" }}
          >
            TilesGallery · Your session will be cleared
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
