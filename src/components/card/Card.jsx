import { formatDate } from "@/utils/util";
import Link from "next/link";
import React from "react";

const Card = async ({ item, key }) => {
  return (
    <div className="grid lg:gap-5 lg:grid-cols-2 my-7 " key={key}>
      <div className="col-span-1">
        <img src={item.img} alt="" className="h-[300px] w-full" />
      </div>
      <div className="col-span-1 ">
        <div>
          <span className="mr-2 text-gray-500 ">
            {formatDate(item.createdAt)}
          </span>
          <span className="uppercase">{item.catSlug}</span>
        </div>
        <Link href="/" className="text-2xl font-bold ">
          <h1 className="my-2">{item.title}</h1>
        </Link>
        <p
          className="mb-2"
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 300) }}
        ></p>
        <Link href={`/posts/${item.slug}`} className="border-b-2">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default Card;
