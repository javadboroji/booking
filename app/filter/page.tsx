import React from "react";
import PagesBanner from "./components/PagesBanner/PagesBanner";
import WithFilterClientWrapper from "./hook/WrapFilter";
import SearchResult from "./components/SearchResult/SearchResult";
import SearchInFilter from "./components/SearchInFilter/SearchInFilter";
import Sort from "./components/SortFilter/Sort";
import Category from "@/components/custom/Wigets/Category";

function page({ params }: { params: { slug: string } }) {
  return (
    <>
      <PagesBanner />
      <div className="flex flex-col  container gap-7     mx-auto my-8">
        <div className="flex justify-between ">
          <SearchInFilter />

          <Sort/>
        </div>
       
        <div className="flex">
          <div className="basis-8/12  h-[10dvh]">
            {" "}
            <SearchResult />{" "}
          </div>
          <div className="basis-4/12  h-[10dvh] px-4">
            <Category/>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
