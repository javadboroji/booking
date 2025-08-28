"use client"
import React from 'react'
import { motion } from "framer-motion";

function ButtonExplore() {
    return (
        <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center group relative overflow-hidden  w-fit hover:cursor-pointer text-white bg-[#113D48] 
              hover:bg-transparent my-2 py-4 px-10 mx-auto rounded-full  border-[1px]"
        >
            <span
                className="absolute left-0 top-0 h-full w-full bg-[#1CA8CB] origin-left scale-x-0 transition-transform 
              duration-500 ease-in-out group-hover:scale-x-100 rounded-full z-0"
            />
            <span className="relative z-10 group-hover:text-white">
                Learn More
            </span>

        </motion.button>
    )
}

export default ButtonExplore