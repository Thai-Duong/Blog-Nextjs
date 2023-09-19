import React from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const CardList = async ({ page }) => {
  const data = await getData(page);

  return (
    <div>
      <h5 className="mb-5 text-2xl font-bold">Popular Category</h5>
      {data?.map((item) => (
        <Card key={item._id} item={item} />
      ))}
      <Pagination page={page} />
    </div>
  );
};
export default CardList;
