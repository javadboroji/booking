import React from 'react'

export const Card = () => {
  return (
    <div className='relative overtflow-hidden '>
      <div className='flex w-10/12 relative lg:min-h-[45rem] min-h-[35rem]  ms-auto me-0'> 
        <div className='absolute rounded-2xl top-0 left-0  bg-amber-200 w-1/2 h-1/2 z-0 border-8 border-white'></div>
         <div className='absolute rounded-2xl top-[15%] right-[15%] bg-red-300 w-1/2 h-1/2 z-1 border-8 border-white'></div>
         <div className='absolute rounded-2xl top-[55%] left-0  bg-amber-400 w-1/2 h-1/3 z-2 border-8 border-white panle-img-mover'></div>
      </div>
    </div>
  )
}
