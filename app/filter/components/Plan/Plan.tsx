import React from 'react'
import { Card } from './Card'
import { Description } from './Description'

export const Plan = () => {
    return (
        <div>
            <div className='container mx-auto lg:py-12 py-6'>
                <div className='flex lg:flex-row flex-col  lg:flex-wrap  justify-between w-full'>
                    <div className='w-full lg:w-1/2 w-full flex-1 order-2 lg:order-1'>
                        <Card /></div>


                    <div className='w-full lg:w-1/3 order-1 lg:order-2'>
                        <Description />
                    </div>
                </div>
            </div>
        </div>
    )
}
