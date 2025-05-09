import Image from "next/image";
import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";

export interface ICardProps {
  cardInfo: {
    image: string;
    title: string;
    rating: number;
    price: number;
    duration: string;
    type: string;
  };
}

const Card: React.FC<ICardProps> = ({ cardInfo }) => {
  return (
    <div className="group/main flex flex-col rounded-xl border-[1px] my-2 hover:shadow-2xl transition-transform duration-600 hover:-translate-y-2">
      <div className="relative overflow-hidden rounded-t-2xl">
        <Image src={cardInfo.image} alt={cardInfo.title} className="transition-transform duration-600 group-hover/main:scale-125" />
      </div>    
      <div className="flex flex-col py-4 px-6">
        <span className="text-2xl hover:text-[#1CA8CB] py-2">
          {cardInfo.title}
        </span>

        <span className="text-xl py-2 ">({cardInfo.rating} Rating)</span>
        <div className="flex py-2">
          <span className="text-2xl font-bold">${cardInfo.price}</span> /
          <span className="text-2xl text-gray-400">{cardInfo.type}</span>
        </div>
        <div className="flex justify-between py-3">
        <div className="flex items-center"> 

        <MdOutlineWatchLater size={22}/>
        <span className="text-2xl ">{cardInfo.duration}</span>
        </div>

          <button
            className="group relative overflow-hidden  w-fit hover:cursor-pointer hover:text-black 
              hover:bg-transparent  px-6 py-2  rounded-full bg-transparent border-[1px] border-gray-400"
          >
            <span
              className="absolute left-0 top-0 h-full w-full bg-[#1CA8CB]  origin-left scale-x-0 transition-transform 
              duration-500 ease-in-out group-hover:scale-x-100 rounded-full z-0"
            />
            <span className="relative z-10 group-hover:text-white">
              Detail View
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
