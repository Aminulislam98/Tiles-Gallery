"use client";
import React, { useState } from "react";
import LogoutModal from "./ui/LogoutConfirm";

const LogoutButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center 
                border border-red-300/50 rounded-lg px-4 py-3 text-base font-medium text-red-600 text-center w-full justify-center
                cursor-pointer transition-all duration-200 hover:scale-[1.02]"
      >
        Logout
      </button>
      <LogoutModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default LogoutButton;
