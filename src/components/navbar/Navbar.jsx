import Link from "next/link";
import React from "react";
import AuthList from "../authList/AuthList";
import ThemeToggle from "../themeToggle/ThemeToggle";

export default function Navbar() {
  return (
    <div className="flex justify-between p-3 ">
      <Link href="/" className="text-3xl font-bold">
        BlogNature
      </Link>
      <div className="flex gap-5 text-center">
        <AuthList />
        <ThemeToggle />
      </div>
    </div>
  );
}
