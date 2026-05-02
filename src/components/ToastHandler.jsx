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

    if (!message || fired.current || isPending) return;

    fired.current = true;

    const isSignup = message === "signup";

    // fallback if session not ready yet
    const userName = session?.user?.name?.split(" ")[0] || "there";

    const userImage = session?.user?.image;

    const initials = session?.user?.name
      ? session.user.name
          .trim()
          .split(/\s+/)
          .map((w) => w[0].toUpperCase())
          .join("")
      : "TG";

    // 🎉 Confetti (only signup)
    if (isSignup) {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.6 },
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.6 },
      });
    }

    toast(
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {userImage ? (
          <Image
            width={36}
            height={36}
            src={userImage}
            alt={userName}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #B85C38",
            }}
          />
        ) : (
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
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

        <div>
          <p style={{ fontSize: "13px", fontWeight: "600", margin: 0 }}>
            {isSignup ? `Welcome, ${userName}` : `Welcome back, ${userName}`}
          </p>
          <p style={{ fontSize: "11px", color: "#8C8880", margin: 0 }}>
            {isSignup ? "Your account is ready" : "Great to see you again"}
          </p>
        </div>
      </div>,
      { duration: 3500 },
    );

    // ✅ clean URL

    window.history.replaceState({}, "", pathname);
  }, [isPending, session?.user?.id]);

  return null;
}
// eslint-disable-next-line react-hooks/exhaustive-deps
