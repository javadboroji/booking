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
import TourGuide from "./components/TourGuide/TourGuide";

function page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col">
      <PagesBanner />
      <div className="flex flex-col  container     mx-auto lg:my-6 ">
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          <SearchInFilter />
          <Sort/>
        </div>
       
        <div className="flex flex-wrap">
           <div className="lg:basis-[70%] basis-[100%] min-h-[10dvh] p-4">
            {" "}
            <SearchResult />{" "}
          </div> 
          <div className="lg:basis-[28%] basis-[100%] flex flex-col  min-h-[10dvh] px-4">
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
