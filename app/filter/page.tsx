import React from "react";
import PagesBanner from "./components/PagesBanner/PagesBanner";
import WithFilterClientWrapper from "./hook/WrapFilter";
import SearchResult from "./components/SearchResult/SearchResult";
import SearchInFilter from "./components/SearchInFilter/SearchInFilter";
import Sort from "./components/SortFilter/Sort";
import Category from "@/components/custom/Wigets/Category";
import RecentPosts from "@/components/custom/Wigets/RecentPosts";
import Popular from "@/components/custom/Wigets/Popular";
import Advertisement from "@/components/custom/Wigets/Advertisement";
import Footer from "@/components/custom/Footer/Footer";
import Ghallery from "./components/Ghallery/Ghallery";

function page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col">
      <PagesBanner />
      <div className="flex flex-col  container gap-7     mx-auto my-8">
        <div className="flex justify-between ">
          <SearchInFilter />

          <Sort/>
        </div>
       
        <div className="flex">
           <div className="basis-[70%] min-h-[10dvh]">
            {" "}
            <SearchResult />{" "}
          </div> 
          <div className="basis-[28%] flex flex-col  min-h-[10dvh] px-4">
            <Category/>
            <RecentPosts/>
            <Popular/>
            <Advertisement/>
          
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default page;
