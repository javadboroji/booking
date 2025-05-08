"use client";
import React, { useEffect } from "react";
import arrowRigth from "@/public/hero-arrow-right.svg";
import arrowLeft from "@/public/hero-arrow-left.svg";
import Image from "next/image";
import useBannerSlideStoe from "@/app/store/BannerSlides";
function ArrowButtons() {
  const { nextIndex, prevIndex,active,slideLength } = useBannerSlideStoe();
  const sliderChangeHandler = (type: string) => {
    if (type === "next") {
      nextIndex();
    } else {
      prevIndex();
    }
  };
  useEffect(() => {
    setTimeout(() => {
        nextIndex();
    }, 10000);
  }, [active])
  
  return (
    <div className="flex w-full justify-between items-center p-2">
      <button
        onClick={() => sliderChangeHandler("next")}
        className="p-2 border-[1px] border-white rounded-full hover:cursor-pointer hover:bg-white"
      >
        <Image src={arrowLeft} alt="arrow" />
      </button>

      <span className="text-white"> {active} / {slideLength-1}</span>

      <button
        onClick={() => sliderChangeHandler("prev")}
        className="p-2 border-[1px] border-white rounded-full hover:cursor-pointer hover:bg-white"
      >
        <Image src={arrowRigth} alt="arrow" />
      </button>
    </div>
  );
}

export default ArrowButtons;
