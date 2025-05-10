import React from "react";
import LayoutWigets from "./LayoutWigets";
import { category } from "@/app/Data/category";
import Link from "next/link";
import { PiMapPinAreaFill } from "react-icons/pi";

function Category() {
  return (
    <LayoutWigets title="Categoryes">
      <div className="flex flex-col">
        {category?.map((item) => {
          return (
            <Link
              href={item.url}
              key={item.id}
              className="flex  items-center justify-between p-2 py-4 font-medium text-[#113D48] 
              border-b-[1px] border-gray-200 hover:text-[#1CA8CB] last:border-0"
            >
              <span className="flex items-center">
                <PiMapPinAreaFill size={20} className="mr-4" /> {item.title}{" "}
              </span>
              <span> {item.count}</span>
            </Link>
          );
        })}
      </div>
    </LayoutWigets>
  );
}

export default Category;
