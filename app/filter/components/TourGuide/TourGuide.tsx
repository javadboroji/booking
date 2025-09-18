"use client"
import SectionTitle from '@/components/custom/SectionTitle/SectionTitle'
import React from 'react'
import "./ToureGuide.style.css"
import Card from './components/Card'
import tourGuideData from '@/app/Data/tourGuide'
import { Swiper, SwiperSlide } from 'swiper/react'

function TourGuide() {
  return (
    <div className='bg-guide p-4 mt-8 lg:mt-0'>
      <SectionTitle title='Meet With Tour Guide' center={true} />
      <div className='container mx-auto py-4'>
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
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
          className="mySwiper w-full flex overflow-hidden mt-5"
        >
          {tourGuideData?.map(item => {
            return <SwiperSlide key={item.id}>
              <Card id={item.id} avatar={item.avatar} job={item.job} userName={item.userName} profileBackgeround={item.profileBackgeround} />
            </SwiperSlide>
          })}
        </Swiper>
      </div>


    </div>
  )
}

export default TourGuide