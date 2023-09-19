"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
      className="relative flex h-8 gap-2 p-1 bg-black cursor-pointer rounded-xl"
    >
      <img src="/moon.png" alt="Moon" />
      <div
        className="absolute w-6 h-6 bg-white rounded-full"
        style={
          theme === "dark"
            ? { left: 2, background: "#0f172a" }
            : { right: 2, background: "white" }
        }
      ></div>
      <img src="/sun.png" alt="Sun" />
    </div>
  );
}
