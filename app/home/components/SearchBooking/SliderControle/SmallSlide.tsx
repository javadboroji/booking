"use client"
import useBannerSlideStoe from "@/app/store/BannerSlides";
import Image from "next/image";
import React from "react";
import { bannerSlides } from "@/app/Data/bannerSlides";
import { AnimatePresence, motion } from "framer-motion";
function SmallSlide() {
  const { active } = useBannerSlideStoe();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={bannerSlides[active].id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <Image
          alt="image"
          src={bannerSlides[active].imageUrl}
          fill
          className="object-cover rounded-tr-2xl rounded-tl-2xl"
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default SmallSlide;
