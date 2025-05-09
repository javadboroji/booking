import React from 'react'
import PagesBanner from './components/PagesBanner/PagesBanner'
import WithFilterClientWrapper from './hook/WrapFilter'
import SearchResult from './components/SearchResult/SearchResult';

function page({params}:{params:{slug:string}}) {
  console.log(params.slug ,'************');
  
  return (
    <>
        <PagesBanner  />
        <div className='flex container gap-7     mx-auto my-8'>
          <div className='basis-8/12  h-[10dvh]'> <SearchResult/> </div>
          <div className='basis-4/12 bg-amber-950 h-[10dvh] '></div>
        </div>
    </>
  )
}

export default page