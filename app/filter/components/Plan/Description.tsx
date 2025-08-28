import React from 'react'
import { PlanItem } from './PlanItem'
import AboutSvg from '@/app/SvgComponent/AboutSvg'
import UmbrellaSvg from '@/app/SvgComponent/UmbrellaSvg'
import LocationSvg from '@/app/SvgComponent/LocationSvg'
import ButtonExplore from './ButtonMore'

export const Description = () => {

    const data = {
        title: "Plan Your Trip With Us",
        dedcription: "There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words.",
        plans: [
            {
                id: "plan-1", title: "Exclusive Trip", description: "There are many variations of passages of available but the majority.", icon: AboutSvg 
            },
            {
                id: "plan-2", title: "Safety First Always", description: "There are many variations of passages of available but the majority.", icon: UmbrellaSvg 
            },
            {
                id: "plan-3", title: "Professional Guide", description: "There are many variations of passages of available but the majority.", icon: LocationSvg 
            },
        ]

    }
    return (
        <div className='flex flex-col w-10/12'>
            <p className='text-4xl font-bold text-[#113D48]'> {data.title}</p>

            <span className='text-gray-400 font-medium py-4'>{data.dedcription}</span>

                <div className='flex flex-col'>
                    {data.plans?.map(item => {
                        return <PlanItem key={item.id} title={item.title} description={item.description} Icon={item.icon} />
                    })}
                </div>
                <div className='p-10 flex justify-center'>
                <ButtonExplore
                />
            </div>
        </div>
    )
}
