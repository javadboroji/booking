"use client"
import SectionTitle from '@/components/custom/SectionTitle/SectionTitle'
import React from 'react'
import Card from './Card'
import image1 from "@/public/destination_3_1.jpg"
import image2 from "@/public/destination_3_2.jpg"
import image3 from "@/public/destination_3_4.jpg"
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import arrowRigth from "@/public/hero-arrow-right.svg";
import { motion } from "framer-motion";
import Image from 'next/image'
function Poplaur() {

    const pouplarData = [
        {
            id: "p-1",
            country: "Japan",
            countOf: 25,
            image: image2 as any

        },
        {
            id: "p-2",
            country: "Dubai",
            countOf: 25,
            image: image1 as any
        },
        {
            id: "p-3",
            country: "Brazil",
            countOf: 25,
            image: image3 as any
        },
        {
            id: "p-4",
            country: "Ameirca",
            countOf: 25,
            image: image1 as any
        }, {
            id: "p-1",
            country: "Japan",
            countOf: 25,
            image: image2 as any

        },
    ]
    return (
        <div className='flex flex-col my-16 container mx-auto'>
            <SectionTitle title='Popular Destination' />
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper w-full flex overflow-hidden"
            >
                {pouplarData?.map(item => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Card data={item} />
                        </SwiperSlide>

                    )
                })}
            </Swiper>
            <div className='p-10 flex justify-center'>
                <motion.button
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex items-center group relative overflow-hidden  w-fit hover:cursor-pointer text-white bg-[#113D48] 
              hover:bg-transparent my-3 py-4 px-10 mx-auto rounded-full  border-[1px]"
                >
                    <span
                        className="absolute left-0 top-0 h-full w-full bg-[#1CA8CB] origin-left scale-x-0 transition-transform 
              duration-500 ease-in-out group-hover:scale-x-100 rounded-full z-0"
                    />
                    <span className="relative z-10 group-hover:text-white">
                        View All
                    </span>
            
                </motion.button>
            </div>
        </div>
    )
}

export default Poplaur