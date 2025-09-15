import React from 'react'
import Avatar from './Avatar'
import Detail from './Detail'

export interface CardProps {
  id:string |number
  userName: string,
  job: string,
  avatar: string
}
const Card:React.FC<CardProps>=({avatar,job,userName})=> {
  return (
    <div className=' rounded-2xl bg-[#E9F6F9] p-2'>
      <Avatar image={avatar}/>
      <Detail/>
    </div>
  )
}

export default Card