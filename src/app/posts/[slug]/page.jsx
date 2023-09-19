"use client";
import Comment from "@/components/comment/page";
import { formatDate } from "@/utils/util";
import React from "react";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const Post = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  if (!data) return null;
  return (
    <div className="mt-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <div className="flex gap-3 my-3">
            <img
              src={data.user.image}
              alt=""
              className="w-[50px] rounded-full"
            />
            <div>
              <div>{data.user.name}</div>
              <div>{formatDate(data.createdAt)}</div>
            </div>
          </div>
        </div>
        <div className=" h-[350px]">
          <img src={data?.img} alt="" className="w-full h-full rounded-lg" />
        </div>
      </div>
      <div className="gap-10 mt-5 lg:flex">
        <div
          className="mt-10"
          dangerouslySetInnerHTML={{ __html: data?.desc }}
        ></div>
      </div>
      <div>
        <Comment postSlug={data.slug} />
        {/* <Menu /> */}
      </div>
    </div>
  );
};
export default Post;
