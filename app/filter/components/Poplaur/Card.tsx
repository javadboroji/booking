import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

interface CardData {
    id: string
    country: string,
    countOf: number,
    image: string
}
interface cardProps {

    data: CardData

}
const Card: React.FC<cardProps> = ({ data }) => {
    return (
        <div className="min-h-[20rem] w-full group/main flex flex-col justify-between rounded-2xl  m-4 transition-transform duration-600 hover:-translate-y-2">
            <div className="relative overflow-hidden rounded-t-2xl flex pt-[90%]">
                <Image src={data.image} alt={data.country} className="object-cover absolute top-0 left-0 h-full w-full transition-transform duration-600 group-hover/main:scale-115" />
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 translate-y-[-100%] bg-gradient-to-b from-white/40 to-transparent rotate-0 group-hover/main:translate-y-full transition-transform duration-700 ease-in-out" />
                </div>
            </div>
            <div className="flex flex-col  justify-center w-full bg-[#baecf893] rounded-b-2xl">
                <span className="text-2xl text-center hover:text-[#1CA8CB] py-2">
                    {data.country}
                </span>
                <span className='text-center text-xl'> {data.countOf} Listing</span>
                <motion.button
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="group relative overflow-hidden  w-fit hover:cursor-pointer text-[#113D48] 
              hover:bg-transparent my-3 py-2 px-10 mx-auto rounded-full bg-transparent border-[1px] border-[#113D48]"
                >
                    <span
                        className="absolute left-0 top-0 h-full w-full bg-[#1CA8CB] origin-left scale-x-0 transition-transform 
              duration-500 ease-in-out group-hover:scale-x-100 rounded-full z-0"
                    />
                    <span className="relative z-10 group-hover:text-white">
                        Book Now
                    </span>
                </motion.button>
            </div>
         
        </div>
    )
}

export default Card