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
    const ratingStar = Array.from(Array(cardInfo.rating).keys());
    const unRating = 5 - ratingStar.length;
    const unRatingStar = Array.from(Array(unRating).keys());
  return (
    <div className="min-h-[35rem] group/main flex flex-col justify-between rounded-xl border-[1px] m-4 hover:shadow-2xl transition-transform duration-600 hover:-translate-y-2">
      <div className="relative overflow-hidden rounded-t-2xl flex pt-[100%]">
        <Image src={cardInfo.image} alt={cardInfo.title} className="object-cover absolute top-0 left-0 h-full w-full transition-transform duration-600 group-hover/main:scale-125" />
      </div>    
      <div className="flex flex-col py-4 px-6 h-[50%]">
        <span className="text-2xl hover:text-[#1CA8CB] py-2">
          {cardInfo.title}
        </span>

        <div className="text-xl py-2 flex items-center">
            <div className="flex">
            {ratingStar?.map((i) => {
          return (
            <svg
              key={`ratingStar-${i}`}
              className="w-4 h-4 text-[#FF833E] ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          );
        })}

        {unRatingStar?.map((i) => {
          return (
            <svg
              key={i}
              className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          );
        })}
            </div>
           <span className="px-2"> ({cardInfo.rating} Rating)</span>
            </div>
        <div className="flex py-2">
          <span className="text-xl font-bold">${cardInfo.price}</span> /
          <span className="text-xl text-gray-400">{cardInfo.type}</span>
        </div>
        <div className="flex justify-between py-3">
        <div className="flex items-center"> 

        <MdOutlineWatchLater size={22} color="#113D48"/>
        <span className="text-xl text-[#113D48]">{cardInfo.duration}</span>
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
