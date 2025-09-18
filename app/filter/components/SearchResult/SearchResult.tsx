import Card, { ICardProps } from '@/components/custom/Card/Card'
import React from 'react'
import image from "@/public/hero_bg_3_4.jpg"
import image2 from "@/public/hero_bg_3_3.jpg"
import image3 from "@/public/hero_bg_3_5.jpg"
import image4 from "@/public/hero_bg_3_1.jpg"
import image5 from "@/public/hero_bg_3_2.jpg"
function SearchResult() {
    const result=[
        {
            id:"c-1",
            duration:"7days" ,
            price:9000, 
            rating:4,
            title:"Dubai Tour Package" ,
            type:"Person",
            image:image as unknown as string
        },
        {
            id:"c-2",
            duration:"5days" ,
            price:5000, 
            rating:5,
            title:"Greece Tour Package" ,
            type:"Person",
            image:image2 as unknown as string
        },
        {
            id:"c-3",
            duration:"5days" ,
            price:5000, 
            rating:5,
            title:"Greece Tour Package" ,
            type:"Person",
            image:image3 as unknown as string
        },
        {
            id:"c-4",
            duration:"5days" ,
            price:5000, 
            rating:5,
            title:"Greece Tour Package" ,
            type:"Person",
            image:image4 as unknown as string
        },
        {
            id:"c-5",
            duration:"5days" ,
            price:5000, 
            rating:5,
            title:"Greece Tour Package" ,
            type:"Person",
            image:image5 as unknown as string
        },
    ]
  return (
    <div className='flex flex-wrap  '>
        {result?.map((item )=>{
            return <div key={item.id} className='xl:w-1/3 md:w-1/2 w-full p-2'><Card  cardInfo={item}/></div>
        })}
    </div>
  )
}

export default SearchResult