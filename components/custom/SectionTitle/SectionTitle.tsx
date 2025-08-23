import React from 'react'
interface SectionTitleProps {
    title: string,
    center?:boolean
}
const SectionTitle: React.FC<SectionTitleProps> = ({ title, center }) => {
    return (
        <div className={`flex container gap-7     mx-auto my-10 ${center?"justify-center":"justify-start"}`}>
            <p className={`text-[#113D48] font-bold text-3xl block`}>{title}</p>
        </div>
    )
}

export default SectionTitle