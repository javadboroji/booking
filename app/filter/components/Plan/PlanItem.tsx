import React from 'react'
interface PlanItemProps {
    title: string,
    description: string,
    icon: React.ComponentType
}
export const PlanItem: React.FC<PlanItemProps> = ({ description, icon, title }) => {
    return (
        <div className='flex items-center my-3'>
            <div className='bg-[#E9F6F9] rounded-full p-4 flex justify-center items-center my-2'></div>
            <div className='flex flex-col'>
                <p className='text-[#113D48] text-2xl font-medium p-2'>{title}</p>
                <span className='text-gray-500 font-medium '>{description}</span>
            </div>
        </div>
    )
}
