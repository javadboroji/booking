import React from 'react'
interface SectionTitleProps {
    title: string
}
const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <div className='flex container gap-7     mx-auto my-10'>
           <p className='text-[#113D48] font-bold text-3xl'>{title}</p> 
        </div>
    )
}

export default SectionTitle