import React from 'react'
import { Card } from './Card'
import { Description } from './Description'

export const Plan = () => {
    return (
        <div>
            <div className='container mx-auto py-12'>
                <div className='flex flex-wrap  justify-between w-full'>
                    <div className='w-full lg:w-1/2 order-2 lg:order-1'>
                        <Card /></div>


                    <div className='w-full lg:w-1/2 order-1 lg:order-2'>
                        <Description />
                    </div>
                </div>
            </div>
        </div>
    )
}
