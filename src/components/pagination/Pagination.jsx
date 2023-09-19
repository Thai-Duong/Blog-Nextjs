"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Pagination({ page }) {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <button
        className="w-[100px] bg-red-500 text-white py-2"
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className="w-[100px] bg-red-500 text-white py-2"
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}
