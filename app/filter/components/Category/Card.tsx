import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface CardData {
    id: string,
    image: string,
    title: string
}
interface CardProps {
    data: CardData
}
const Card: React.FC<CardProps> = ({ data }) => {
    return (
        <div className="min-h-[20rem] w-full group/main flex flex-col justify-between rounded-2xl m-4  transition-transform duration-600 hover:-translate-y-2">
            <div className="relative overflow-hidden rounded-2xl flex lg:pt-[90%] md:pt-[80%] pt-[60%]">
                <Image src={data.image} alt={data.title} className="object-cover absolute top-0 left-0 h-full w-full transition-transform duration-600 group-hover/main:scale-115" />
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 translate-y-[-100%] bg-gradient-to-b from-white/40 to-transparent rotate-0 group-hover/main:translate-y-full transition-transform duration-700 ease-in-out" />
                </div>
            </div>

            <div className='flex flex-col items-center justify-center my-3'>
                <span className='text-[#113D48] text-2xl my-2'>{data.title}</span>
                <Link className='text-gray-70' href={""}> See More</Link>
            </div>
        </div>
    )
}

export default Card