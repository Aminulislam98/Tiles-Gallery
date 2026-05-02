"use client";
import { useEffect, useRef } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function ToastHandler() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const fired = useRef(false);
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    const message = searchParams.get("toast");
    if (!message || fired.current || isPending || !session) return;

    fired.current = true;

    const isSignup = message === "signup";
    const userName = session?.user?.name?.split(" ")[0] || "there";
    const userImage = session?.user?.image;
    const initials = session?.user?.name
      ? session.user.name
          .trim()
          .split(/\s+/)
          .map((w) => w[0].toUpperCase())
          .join("")
      : "TG";

    if (isSignup) {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.6 },
        colors: ["#B85C38", "#D4724D", "#C09A5B", "#fff", "#f5e6d3"],
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.6 },
        colors: ["#B85C38", "#D4724D", "#C09A5B", "#fff", "#f5e6d3"],
      });
      setTimeout(() => {
        confetti({
          particleCount: 60,
          spread: 100,
          origin: { x: 0.5, y: 0.5 },
          colors: ["#B85C38", "#D4724D", "#C09A5B", "#fff"],
        });
      }, 300);
    }

    toast(
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Avatar */}
        {userImage ? (
          <Image
            src={userImage}
            alt={userName}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
              border: "2px solid #B85C38",
            }}
          />
        ) : (
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              flexShrink: 0,
              background: "linear-gradient(135deg, #D4724D, #B85C38)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            {initials}
          </div>
        )}

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#1A1714",
              margin: 0,
            }}
          >
            {isSignup ? `Welcome, ${userName}` : `Welcome back, ${userName}`}
          </p>
          <p style={{ fontSize: "11px", color: "#8C8880", margin: 0 }}>
            {isSignup ? "Your account is ready" : "Great to see you again"}
          </p>
        </div>
      </div>,
      {
        duration: 3500,
        style: {
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          borderRadius: "12px",
          padding: "8px 8px",
          maxWidth: "260px",
          minWidth: "200px",
        },
      },
    );

    window.history.replaceState({}, "", pathname);
  }, [isPending, session]);

  return null;
}
