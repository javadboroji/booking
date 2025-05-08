import React from 'react'
import Items from './Items/Items'
import SliderControle from './SliderControle/SliderControle'

function SearchBooking() {
  
  return (
    <div className='container relative z-50 mx-auto rounded-2xl flex shadow-2xl bg-white translate-y-1/2 flex justify-between'>
        <Items/>
        <SliderControle/>
    </div>
  )
}

export default SearchBooking