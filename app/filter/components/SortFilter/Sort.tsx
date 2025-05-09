"use client"
import { sortFilter } from '@/app/Data/sortFilter'
import React, { useState } from 'react'
function Sort() {
const [sort, setSort] = useState("1")
  return (
    <div className='basis-2/12 bg-amber-100'>
        <button>   </button>  
        <div >
            {sortFilter.map(item=>{
                return <span>{item.title}</span>
            })}
            </div> 
    </div>
  )
}

export default Sort