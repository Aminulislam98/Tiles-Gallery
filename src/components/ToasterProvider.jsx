"use client";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

export default function ToasterProvider() {
  const [position, setPosition] = useState("top-center");

  useEffect(() => {
    const update = () => {
      setPosition(window.innerWidth >= 768 ? "top-left" : "top-center");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <Toaster
      position={position}
      toastOptions={{
        duration: 3500,
      }}
    />
  );
}
