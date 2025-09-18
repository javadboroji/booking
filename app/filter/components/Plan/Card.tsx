import React from 'react'
import image1 from '@/public/about_3_1.jpg'
import image2 from '@/public/about_3_2.jpg'
import image3 from '@/public/about_3_3.jpg'
import Image from 'next/image'

export const Card = () => {
  return (
    <div className='relative overtflow-hidden w-full'>
      <div className='flex w-full relative lg:min-h-[60rem] min-h-[35rem]  ms-auto me-0'>
        <div className='absolute rounded-4xl top-0 lg:left-[15%] left-[5%] overflow-hidden   lg:w-[40%] w-1/2 lg:h-1/2 z-0 border-8 border-white'>
          <Image src={image1} alt='image' className='w-full h-full object-cover ' />
        </div>
        <div className='absolute rounded-4xl top-[15%] lg:right-[15%] right-[5%]  overflow-hidden    lg:w-[40%] w-1/2 lg:h-1/2 z-1 border-8 border-white'>
          <Image src={image2} alt='image' className='w-full h-full object-cover' />
        </div>
        <div className='absolute rounded-4xl  overflow-hidden   lg:top-[55%] md:top-[70%] top-[55%] lg:left-[15%] left-[5%]   lg:w-[40%] w-1/2 lg:h-1/3 z-2 border-8 border-white panle-img-mover'>
          <Image src={image3} alt='image' className='w-full h-full object-cover'/>
        </div>
      </div>
    </div>
  )
}
