"use client";
import React from "react";
import toast from "react-hot-toast";
import { HiHeart, HiShare } from "react-icons/hi";

const WhishlistToast = () => {
  const showToast = (message, icon, gradient) => {
    toast(
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: gradient }}
        >
          {icon}
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-sm font-semibold" style={{ color: "#1A1714" }}>
            {message}
          </p>
          <p className="text-xs" style={{ color: "#8C8880" }}>
            Coming soon — stay tuned!
          </p>
        </div>
      </div>,
      {
        style: {
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          border: "1px solid rgba(0,0,0,0.06)",
          borderRadius: "16px",
          padding: "12px 16px",
        },
        duration: 2500,
      },
    );
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={() =>
          showToast(
            "Wishlist",
            <HiHeart size={15} color="#fff" />,
            "linear-gradient(135deg, #FF6B6B, #EE5A24)",
          )
        }
        className="flex-1 py-3.5 rounded-xl text-sm font-medium text-white transition-all bg-[#0F0E0C] hover:bg-[#B85C38]"
      >
        Add to Wishlist
      </button>

      <button
        onClick={() =>
          showToast(
            "Favourite",
            <HiHeart size={15} color="#fff" />,
            "linear-gradient(135deg, #FD79A8, #E84393)",
          )
        }
        className="px-4 py-3.5 rounded-xl transition-all bg-white border border-[#E4DFD8] text-[#8C8880] hover:border-[#B85C38] hover:text-[#B85C38]"
      >
        <HiHeart size={18} />
      </button>

      <button
        onClick={() =>
          showToast(
            "Share",
            <HiShare size={15} color="#fff" />,
            "linear-gradient(135deg, #74B9FF, #0984E3)",
          )
        }
        className="px-4 py-3.5 rounded-xl transition-all bg-white border border-[#E4DFD8] text-[#8C8880] hover:border-[#B85C38] hover:text-[#B85C38]"
      >
        <HiShare size={18} />
      </button>
    </div>
  );
};

export default WhishlistToast;
