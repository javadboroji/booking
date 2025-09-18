import React, { use } from 'react'
import { CardProps } from './Card'
import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci'
import { FaTwitter, FaWhatsapp } from 'react-icons/fa6'
type DetailProps = Omit<CardProps, 'id' | 'avatar' |'profileBackgeround'>
const Detail: React.FC<DetailProps> = ({ job, userName }) => {
  return (
    <div className='bg-white rounded-3xl p-8 flex flex-col justify-center items-center my-2 w-full'>
      <h2> {userName}</h2>

      <span className='text-lg'>{job}</span>

      <div className="flex my-2">
        <div className="w-10 h-10 border border-[#1CA8CB]  rounded-full flex items-center justify-center me-4 group-[instageram]:"> <CiInstagram size={21} className="text-[#1CA8CB]" /></div>
        <div className="w-10 h-10 border border-[#1CA8CB]   rounded-full flex items-center justify-center me-4"> <CiLinkedin size={21} className="text-[#1CA8CB]" /></div>
        <div className="w-10 h-10 border border-[#1CA8CB]   rounded-full flex items-center justify-center me-4"> <FaTwitter size={21} className="text-[#1CA8CB]" /></div>
        <div className="w-10 h-10 border border-[#1CA8CB]   rounded-full flex items-center justify-center me-4"> <FaWhatsapp size={21} className="text-[#1CA8CB]" /></div>
        <div className="w-10 h-10 border border-[#1CA8CB]   rounded-full flex items-center justify-center "> <CiFacebook size={21} className="text-[#1CA8CB]" /></div>

      </div>
    </div>
  )
}

export default Detail