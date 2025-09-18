import React from 'react'
import Avatar from './Avatar'
import Detail from './Detail'
import Image from 'next/image'

export interface CardProps {
  id:string |number
  userName: string,
  job: string,
  avatar: string ,

  profileBackgeround:string
}
const Card:React.FC<CardProps>=({avatar,job,userName,profileBackgeround})=> {
  return (
    <div className='relative overflow-hidden flex justify-center flex-col items-center rounded-4xl bg-[#E9F6F9] p-2 py-8 '>
      <div className='absolute left-0 right-0 top-0 h-[44%] '>
        <Image src={profileBackgeround}  className='w-full' alt='bg'/>
      </div>
      <Avatar image={avatar}/>
      <Detail userName={userName} job={job}/>
    </div>
  )
}

export default Card