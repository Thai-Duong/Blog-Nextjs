import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div className="w-full mt-12">
      <h2 className="text-gray-500">What is hot </h2>
      <h1 className="text-2xl font-bold">Most Popular</h1>
      <div className="mt-4">
        <Link href="/" className="flex mt-5">
          <div>
            <img
              src="/avarta.jpg"
              alt=""
              className="border rounded-full w-[150px] "
            />
          </div>
          <div className="ml-2">
            <span className="px-3 py-1 text-sm text-white bg-orange-500 rounded-xl">
              Euro
            </span>
            <h4 className="my-2 text-sm font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <div className="flex gap-2 text-sm text-gray-500">
              <span>Duong Thai</span>
              <span>08.09.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex mt-5">
          <div>
            <img
              src="/avarta.jpg"
              alt=""
              className="border rounded-full w-[150px] "
            />
          </div>
          <div className="ml-2">
            <span className="px-3 py-1 text-sm text-white bg-orange-500 rounded-xl">
              Euro
            </span>
            <h4 className="my-2 text-sm font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <div className="flex gap-2 text-sm text-gray-500">
              <span>Duong Thai</span>
              <span>08.09.2023</span>
            </div>
          </div>
        </Link>{" "}
        <Link href="/" className="flex mt-5">
          <div>
            <img
              src="/avarta.jpg"
              alt=""
              className="border rounded-full w-[150px] "
            />
          </div>
          <div className="ml-2">
            <span className="px-3 py-1 text-sm text-white bg-orange-500 rounded-xl">
              Euro
            </span>
            <h4 className="my-2 text-sm font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <div className="flex gap-2 text-sm text-gray-500">
              <span>Duong Thai</span>
              <span>08.09.2023</span>
            </div>
          </div>
        </Link>{" "}
        <Link href="/" className="flex mt-5">
          <div>
            <img
              src="/avarta.jpg"
              alt=""
              className="border rounded-full w-[150px] "
            />
          </div>
          <div className="ml-2">
            <span className="px-3 py-1 text-sm text-white bg-orange-500 rounded-xl">
              Euro
            </span>
            <h4 className="my-2 text-sm font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <div className="flex gap-2 text-sm text-gray-500">
              <span>Duong Thai</span>
              <span>08.09.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
