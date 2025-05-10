import React from 'react'
interface ILayoutWigetsProps{
    children :React.ReactNode,
    title:string
}
const LayoutWigets:React.FC<ILayoutWigetsProps> =({children ,title})=> {
  return (
    <div className='p-6 rounded-2xl border-[1px] border-gray-300'>
        <p className='text-2xl pb-4 relative
        text-[#113D48] font-medium mb-2  '> {title}
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r to-gray-200 from-[#1CA8CB]" />
        </p>
        
        {children}
    </div>
  ) 
}

export default LayoutWigets