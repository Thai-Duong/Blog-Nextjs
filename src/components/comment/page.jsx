"use client";
import { formatDate } from "@/utils/util";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};
export default function Comment({ postSlug }) {
  const { status } = useSession();
  const { data, mutate } = useSWR(
    `http://localhost:3000/api/comment?postSlug=${postSlug}`,
    fetcher
  );
  const [desc, setDesc] = useState("");
  const handleSubmit = async () => {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };
  if (!data) return null;
  return (
    <div className="mt-10">
      <h1 className="mb-4 text-2xl font-bold">Comment</h1>
      {status === "authenticated" ? (
        <div className="flex gap-3">
          <textarea
            placeholder="write a comment..."
            className="w-full px-5 py-2 border rounded-xl"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="px-4 text-white bg-blue-500 border rounded-xl"
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      {data.map((item) => (
        <div className="my-4" key={item._id}>
          <div className="flex gap-3">
            <img
              src={item.user.image}
              alt=""
              className="w-[50px] rounded-full"
            />
            <div>
              <div>{item.user.name}</div>
              <div>{formatDate(item.createdAt)}</div>
            </div>
          </div>
          <p className="p-4">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
