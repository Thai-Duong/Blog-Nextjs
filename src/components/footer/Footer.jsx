import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="grid gap-8 py-5 mt-20 xl:grid-cols-2 wrapper">
      <div>
        <img src="/logo.png" alt="" className="w-[150px]" />
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni
          saepe vero repellendus minus aliquam cumque laborum, delectus
          voluptatum ipsa voluptas ad veniam maxime, a magnam dolores vel! Illo,
          adipisci.
        </p>
        <p>By DuongThai @2023</p>
      </div>
      <div className="grid grid-cols-3 ">
        <div className="flex flex-col gap-3">
          <div className="font-bold">Links</div>
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/" className="">
            About
          </Link>
          <Link href="/" className="">
            Contact
          </Link>
          <Link href="/" className="">
            Blog
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">Category</div>
          <Link href="/" className="">
            Asian
          </Link>
          <Link href="/" className="">
            Euro
          </Link>
          <Link href="/" className="">
            Africa
          </Link>
          <Link href="/" className="">
            Amerca
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">Social</div>
          <Link href="/" className="">
            Facebook
          </Link>
          <Link href="/" className="">
            Instagram
          </Link>
          <Link href="/" className="">
            Twiter
          </Link>
          <Link href="/" className="">
            Youtube
          </Link>
        </div>
      </div>
    </div>
  );
}
