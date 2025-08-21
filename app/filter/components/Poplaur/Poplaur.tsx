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

        </div>
    )
}

export default Poplaur