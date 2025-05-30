import React from "react";
import LayoutWigets from "./LayoutWigets";
import popluar from "@/app/Data/popular";
import Link from "next/link";
function Popular() {
  return (
    <LayoutWigets title="Popular Tags">
      <div className="flex flex-wrap">
        {popluar?.map((item) => {
          return (
            <Link key={item.id} href={item.url} className=" p-2 mx-2 my-1 bg-[#1ca8cb7c] text-[#113D48] block rounded-[2px]  font-semibold hover:text-white hover:bg-[#1CA8CB]">
              {item.label}
            </Link>
          );
        })}
      </div>
    </LayoutWigets>
  );
}

export default Popular;
