import React from 'react'
import { Card } from './Card'
import { Description } from './Description'

export const Plan = () => {
    return (
        <div>
            <div className='container mx-auto py-12'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex-1/2'>
                        <Card /></div>


                    <div className='flex-1/4'>
                        <Description />
                    </div>
                </div>
            </div>
        </div>
    )
}
