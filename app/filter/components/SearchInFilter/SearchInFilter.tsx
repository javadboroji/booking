import React from 'react'
import { CiSearch } from "react-icons/ci";

function SearchInFilter() {
  return (
    <div className='basis-4/12 bg-[#E9F6F9] rounded-full relative'>
        <input placeholder='search' className='bg-transparent p-4 w-[80%]' />
        <button className='absolute right-2 top-[15%] hover:cursor-pointer bg-[#1CA8CB] p-2 rounded-full'> 
            <CiSearch size={24}/>
        </button>
    </div>
  )
}

export default SearchInFilter