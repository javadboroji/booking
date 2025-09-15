"use client"
import SectionTitle from '@/components/custom/SectionTitle/SectionTitle'
import React from 'react'
import "./ToureGuide.style.css"
import Card from './components/Card'
import tourGuideData from '@/app/Data/tourGuide'
import { Swiper, SwiperSlide } from 'swiper/react'

function TourGuide() {
  return (
    <div className='bg-guide p-4'>
      <SectionTitle title='Meet With Tour Guide' center={true} />
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper w-full flex overflow-hidden"
      >
        {tourGuideData?.map(item => {
          return <SwiperSlide key={item.id}>
            <Card id={item.id} avatar={item.avatar} job={item.job} userName={item.userName} />
          </SwiperSlide>
        })}
      </Swiper>


    </div>
  )
}

export default TourGuide