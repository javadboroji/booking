
"use client"
import SectionTitle from '@/components/custom/SectionTitle/SectionTitle'
import React from 'react'
import image1 from "@/public/category_1_1.jpg"
import image2 from "@/public/category_1_2.jpg"
import image3 from "@/public/category_1_3.jpg"
import image4 from "@/public/category_1_4.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from './Card'
import { Pagination } from 'swiper/modules'

function Category() {
    const categories = [
        {
            id: "cat-1",
            image: image1 as any,
            title: "Cruisea"
        },
        {
            id: "cat-2",
            image: image2 as any,
            title: "Hiking"
        },
        {
            id: "cat-3",
            image: image3 as any,
            title: "Airbirds"
        },
        {
            id: "cat-4",
            image: image4 as any,
            title: "Wildlife"
        },
        {
            id: "cat-22",
            image: image1 as any,
            title: "Cruisea"
        },
    ]

    return (
        <div className='bg-[#e9f6f9e1] py-18 bg-vector'>
            <div className='container mx-auto'>
                <SectionTitle title='Tour Categories' center />
                <Swiper
                    loop
                    autoplay
                    breakpoints={{
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        980: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        680: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                           500: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper w-full flex overflow-hidden py-8 my-4"
                >
                    {categories?.map(item => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Card data={item} />
                            </SwiperSlide>

                        )
                    })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Category