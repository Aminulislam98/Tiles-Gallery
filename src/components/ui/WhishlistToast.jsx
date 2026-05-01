"use client";
import React from "react";
import toast from "react-hot-toast";
import { HiHeart, HiShare } from "react-icons/hi";

const WhishlistToast = () => {
  const showToast = (message) => {
    toast(`${message} Coming soon — stay tuned!`);
  };
  return (
    <div className="flex gap-3">
      <button
        onClick={() => {
          showToast("Wishlist");
        }}
        className="flex-1 py-3.5 rounded-xl text-sm font-medium text-white transition-opacity bg-[#0F0E0C] hover:text-white hover:bg-[#B85C38]"
      >
        Add to Wishlist
      </button>
      <button
        onClick={() => {
          showToast("Favorite Feature");
        }}
        className="px-4 py-3.5 rounded-xl transition-colors hover:border-[#B85C38] hover:text-[#B85C38] bg-white border border-[#E4DFD8] text-[#8C8880]"
      >
        <HiHeart size={18} className="" />
      </button>
      <button
        onClick={() => {
          showToast("Share Feature");
        }}
        className="px-4 py-3.5 rounded-xl transition-colors hover:opacity-70 bg-white border border-[#E4DFD8] text-[#8C8880] hover:border-[#B85C38] hover:text-[#B85C38]"
      >
        <HiShare size={18} />
      </button>
    </div>
  );
};

export default WhishlistToast;
