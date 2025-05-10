import React from "react";
import LayoutWigets from "./LayoutWigets";
import { recentPosts } from "@/app/Data/recentPosts";
import Link from "next/link";
import Image from "next/image";

function RecentPosts() {
  return (
    <LayoutWigets title="Recent Posts">
      <div className="p-4">
        {recentPosts?.map((item) => {
          return (
            <Link href={""} className="flex mb-4 text-[#113D48]  hover:text-[#1CA8CB]" key={item.id} >
              <Image width={100} height={100} src={item.image} alt={item.id} className="mr-4"/>
              <div className="flex flex-col">
                <p className=" font-medium">{item.title}</p>
                <span className="text-gray-400">{item.date}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </LayoutWigets>
  );
}

export default RecentPosts;
