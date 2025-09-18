import React from 'react'
import Items from './Items/Items'
import SliderControle from './SliderControle/SliderControle'

function SearchBooking() {

  return (
    <div className='container relative z-50 mx-auto rounded-2xl  shadow-2xl bg-white translate-y-1/2 '>
      <div className='flex w-full flex-col md:flex-row justify-between'>
        <Items />
        <SliderControle />
      </div>
    </div>
  )
}

export default SearchBooking