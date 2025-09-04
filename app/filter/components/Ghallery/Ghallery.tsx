import SectionTitle from '@/components/custom/SectionTitle/SectionTitle'
import Image from 'next/image'
import React from 'react'
import image1 from "@/public/gallery_3_1.jpg"
import image2 from "@/public/gallery_3_2.jpg"
import image3 from "@/public/gallery_3_3.jpg"
import image4 from "@/public/gallery_3_5.jpg"
import image5 from "@/public/gallery_3_6.jpg"
import { MdSavedSearch } from "react-icons/md";

function Ghallery() {
    return (
        <div className='py-8'>
            <SectionTitle title='Recent Gallery' center={true} />
            <div className='container mx-auto'>
                <div className='grid grid-flow-col grid-cols-4 grid-rows-2 gap-4 h-[40rem]'>



                    <div className='relative overflow-hidden  group   row-span-2 rounded-4xl '>
                        <div className='w-full  h-full overflow-hidden transition-all delay-300 ease-out '>
                            <Image className='-z-10 transition-transform duration-500 ease-in rounded-4xl absolute group-hover:scale-105' alt='image' src={image1} />
                            <HoverComponent />
                        </div>
                    </div>
                    <div className=' row-span-1 row-span-1 rounded-4xl  relative group overflow-hidden'>
                        <Image className='-z-10 transition-transform duration-500 ease-in rounded-4xl absolute group-hover:scale-105 ' alt='image' src={image2} />
                        <HoverComponent />

                    </div>
                    <div className='col-span-1  row-span-1 rounded-4xl relative group overflow-hidden' >
                        <Image className='-z-10 transition-transform duration-500 ease-in rounded-4xl absolute group-hover:scale-105 h-full' alt='image' src={image4} />
                        <HoverComponent />

                    </div>
                    <div className='row-span-1 col-span-2 rounded-4xl relative group overflow-hidden'>

                        <Image className='-z-10 transition-transform duration-500 ease-in rounded-4xl absolute group-hover:scale-105' alt='image' src={image3} />
                        <HoverComponent />
                    </div>
                    <div className='row-span-1 rounded-4xl relative group overflow-hidden' >

                        <Image className='-z-10 transition-transform duration-500 ease-in rounded-4xl absolute group-hover:scale-105' alt='image' src={image5} />
                        <HoverComponent />
                    </div>
                    <div className='row-span-1 rounded-4xl relative group overflow-hidden '>

                        <Image className='-z-10 transition-transform duration-500 ease-in rounded-4xl absolute group-hover:scale-105' alt='image' src={image1} />
                        <HoverComponent />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Ghallery


const HoverComponent = () => {
    return <>
        <div className=' flex justify-center items-center  transition-all delay-300 ease-out  absolute opacity-0 rounded-4xl bg-black w-full h-1/3 z-10  scale-50   -translate-y-[20%] group-hover:opacity-35 group-hover:-translate-y-[0%] group-hover:h-full group-hover:scale-100'>

        </div>

        <button className='transition-all delay-300 ease-out  opacity-0 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 hover:cursor-pointer group-hover:opacity-100 '> <MdSavedSearch size={48} color='white' /></button>
    </>
}