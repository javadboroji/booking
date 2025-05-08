"use client";
import React, { useEffect } from "react";
import image1 from "../../../../public/hero_bg_3_1.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SearchBooking from "../SearchBooking/SearchBooking";
import { bannerSlides } from "@/app/Data/bannerSlides";
import useBannerSlideStoe from "@/app/store/BannerSlides";
function Banner() {
  const { setSlideLength, active } = useBannerSlideStoe();
  useEffect(() => {
    setSlideLength(bannerSlides?.length);
  }, []);

  return (
    <div className="w-full h-[90dvh] flex flex-col relative banner">
      {bannerSlides && bannerSlides.length > 0 && (
        <React.Fragment key={bannerSlides[active]?.id}>
          <Image
            fill
            src={bannerSlides[active].imageUrl}
            alt="banner"
            className="object-cover"
          />
          <div className="container mx-auto my-auto z-10">
            <div className="flex flex-col justify-center max-w-10/12">
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="!text-8xl text-white"
              >
                {bannerSlides[active].title}
              </motion.h1>

              <motion.span
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white text-xl py-2 w-1/2"
              >
                {bannerSlides[active].subtitle}
              </motion.span>

              <motion.button
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="group relative overflow-hidden text-white w-fit hover:cursor-pointer hover:text-black 
              hover:bg-transparent my-6 py-4 px-10 rounded-full bg-transparent border-[1px] border-white"
              >
                <span
                  className="absolute left-0 top-0 h-full w-full bg-white origin-left scale-x-0 transition-transform 
              duration-500 ease-in-out group-hover:scale-x-100 rounded-full z-0"
                />
                <span className="relative z-10 group-hover:text-black">
                  Explore Tourm
                </span>
              </motion.button>
            </div>
          </div>
        </React.Fragment>
      )}

      <SearchBooking />
    </div>
  );
}

export default Banner;
