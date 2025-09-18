import Image from 'next/image'
import React from 'react'

function Avatar({ image }: { image: string }) {
  return (
    <div className='bg-white  w-1/2 h-[11rem]  rounded-full p-4 relative overflow-hidden group mt-16 mb-4'>
        <Image src={image} className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-in  group-hover:scale-105' alt='avtar' />
    </div>
  )
}

export default Avatar