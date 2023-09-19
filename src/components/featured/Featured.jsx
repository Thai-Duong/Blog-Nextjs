import React from "react";

export default function Featured() {
  return (
    <div className="mt-10">
      <h1 className="text-5xl">ANIMALS UP CLOSE WITH BERTIE GREGORY</h1>
      <div className="gap-5 mt-10 text-center lg:flex ">
        <div className="">
          <img src="/nature.jpg" alt="" className="object-cover" />
        </div>
        <div className="text-left ">
          <h1 className="mt-20 text-2xl font-bold">Hey are yoy ready</h1>
          <p className="my-5">
            Bertie Gregory is back, and this time the adventures are even more
            epic! Animals Up Close with Bertie Gregory goes behind-the-scenes
            with Bertie and his team as they adapt to unpredictable wildlife in
            remote environments – where filming rarely goes as planned.
          </p>
          <button className="w-full px-3 py-4 text-black bg-white border rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
