import Card, { ICardProps } from '@/components/custom/Card/Card'
import React from 'react'
import image from "@/public/hero_bg_3_4.jpg"
function SearchResult() {
    const result=[
        {
            duration:"7days" ,
            price:9000, 
            rating:4,
            title:"Dubai Tour Package" ,
            type:"Person",
            image:image as unknown as string
        },
        {
            duration:"5days" ,
            price:5000, 
            rating:5,
            title:"Greece Tour Package" ,
            type:"Person",
            image:image as unknown as string
        },
    ]
  return (
    <div className='flex gap-8'>
        {result?.map((item )=>{
            return <div className='basis-6/12'><Card  cardInfo={item}/></div>
        })}
    </div>
  )
}

export default SearchResult