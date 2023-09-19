import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const CategoryList = async () => {
  const data = await getData();
  return (
    <div className="xl:mt-10">
      <h5 className="mb-5 text-2xl font-bold">Popular Category</h5>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="flex justify-center bg-[#57c4ff31] py-2"
            >
              <Link href="#" className="flex items-center">
                <img src={item.img} alt="" className="w-10 h-10 mr-3" />
                {item.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default CategoryList;
