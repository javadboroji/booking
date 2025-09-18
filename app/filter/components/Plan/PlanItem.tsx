import React from 'react'
interface PlanItemProps {
    title: string,
    description: string,
    Icon: React.ComponentType | any
}
export const PlanItem: React.FC<PlanItemProps> = ({ description, Icon, title }) => {
    return (
        <div className='flex items-center my-3'>
            <div className='bg-[#E9F6F9] rounded-full lg:p-6 p-4 flex justify-center items-center my-2'>
                <Icon />
            </div>
            <div className='flex flex-col'>
                <p className='text-[#113D48] lg:text-2xl font-medium p-2'>{title}</p>
                <span className='text-gray-500 font-medium '>{description}</span>
            </div>
        </div>
    )
}
