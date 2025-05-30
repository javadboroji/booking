"use client";
import Image from 'next/image'
import React from 'react'
import image from "@/public/logo2.svg"
import { motion } from "framer-motion";

function Advertisement() {
  return (
    <div className='relative  rounded-[6px] min-h-[29rem] overflow-hidden p-8  advertisement flex flex-col'>
        <p className='text-white text-3xl'> Need Help? We Are Here To Help You</p>
        <div className='bg-white rounded-full my-8'>
            <Image src={image}  alt='image' className='my-4 mx-auto'/>
        </div>
        <p className='text-white text-2xl'>
        You Get Online support
        +256 214 203 215
        </p>
        <motion.button
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="group relative overflow-hidden text-white w-fit hover:cursor-pointer hover:text-black 
              hover:bg-transparent my-6 mx-auto py-4 px-10 rounded-full bg-transparent border-[1px] border-white"
              >
                <span
                  className="absolute left-0 top-0 h-full w-full bg-white origin-left scale-x-0 transition-transform 
              duration-500 ease-in-out group-hover:scale-x-100 rounded-full z-0"
                />
                <span className="relative z-10 group-hover:text-black">
                  Read More
                </span>
              </motion.button>
    </div>
  )
}

export default Advertisement