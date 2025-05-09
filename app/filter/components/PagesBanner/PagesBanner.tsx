"use client"
import useFilterStore, { IFilter } from '@/app/store/Filter'
import Menu from '@/components/custom/Menu/Menu';
import React from 'react'
import image from "@/public/hero_bg_3_2.jpg"
import Image from 'next/image';
interface IPagesBannerProps {

}
function PagesBanner() {
  const { destination, duration, type } = useFilterStore();
  console.log(destination ,'***');
  
  return (
    <div className='flex w-full h-[50dvh] relative overflow-hidden'>
      <div className='absolute w-full h-full top-0 left-0 right-0 flex banner'>
        <Image src={image} alt='image' className='object-cover' fill/>
      </div>
      <Menu/>
    </div>
  )
}

export default PagesBanner