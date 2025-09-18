import React from "react";
import { LuSend } from "react-icons/lu";
import image from "@/public/shape_8.png"
import Image from "next/image";
function Subscribe() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:px-4 lg:py-8 py-4 relative border-b-[1px] border-[#E9F6F9]">
        <Image src={image} alt="shape" className="absolute right-full subscribe-shape-animation hidden xl:block"/>
      <h1 className="text-white xl:!text-5xl  !text-2xl xl:leading-16 my-4 md:my-0">
        {" "}
        Get Updated The Latest <br /> Newsletter
      </h1>

      <div className="flex md:flex-row flex-col items-center ">
        <input
          className="xl:p-6 p-3 mx-4 rounded-full border-[1px]  border-white  text-white lg:flex-1 xl:w-[30rem] lg:w-[20rem] w-full"
          placeholder="Enter Email"
        />

        <button
          className="flex justify-center group relative overflow-hidden text-white xl:w-1/3 w-full hover:cursor-pointer hover:text-black 
              hover:bg-transparent my-6 xl:p-6 p-3  rounded-full bg-[#1CA8CB]  "
        >
          <span
            className="absolute left-0 top-0 h-full w-full bg-white origin-left scale-x-0 transition-transform 
              duration-500 ease-in-out group-hover:scale-x-100 rounded-full z-0"
          />
          <span className="relative z-10 group-hover:text-black lg:text-xl flex items-center">
            Subscribe Now

            <LuSend size={24} className="mt-1 mx-2"/>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
