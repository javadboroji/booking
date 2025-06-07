import React from "react";
import { LuSend } from "react-icons/lu";
import image from "@/public/shape_8.png"
import Image from "next/image";
function Subscribe() {
  return (
    <div className="flex items-center justify-between px-4 py-8 relative border-b-[1px] border-[#E9F6F9]">
        <Image src={image} alt="shape" className="absolute right-full subscribe-shape-animation"/>
      <h1 className="text-white !text-5xl leading-16">
        {" "}
        Get Updated The Latest <br /> Newsletter
      </h1>

      <div className="flex items-center ">
        <input
          className="px-6 py-6 mx-4 rounded-full border-[1px]  border-white  text-white w-[30rem]"
          placeholder="Enter Email"
        />

        <button
          className="group relative overflow-hidden text-white w-1/3 hover:cursor-pointer hover:text-black 
              hover:bg-transparent my-6 py-6 px-6 rounded-full bg-[#1CA8CB]  "
        >
          <span
            className="absolute left-0 top-0 h-full w-full bg-white origin-left scale-x-0 transition-transform 
              duration-500 ease-in-out group-hover:scale-x-100 rounded-full z-0"
          />
          <span className="relative z-10 group-hover:text-black text-xl flex items-center">
            Subscribe Now

            <LuSend size={24} className="mt-1 mx-2"/>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
