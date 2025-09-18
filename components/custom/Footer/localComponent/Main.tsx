import React from "react";
import image from "@/public/logo-white2.svg";
import Image from "next/image";
import footerQuickLinks from "@/app/Data/footerQuickLinks";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

function Main() {
  return (
    <div className="mt-8 flex flex-col lg:flex-row justify-between">
      {/*  description  */}
      <div className="xl:w-1/3 lg:h-1/2 w-full p-4">
        <Image src={image} alt="logo" />
        <span className="text-white lg:text-xl lg:leading-10 block mt-4">
          Rapidiously myocardinate cross-platform intellectual capital model.
          Appropriately create interactive infrastructures
        </span>
        <div className="flex ">
        <div className="w-10 h-10 bg-[#3D626C] hover:bg-[#1CA8CB] rounded-full flex items-center justify-center me-4 group-[instageram]:"> <CiInstagram size={24} className="text-white"/></div>
        <div className="w-10 h-10 bg-[#3D626C] rounded-full flex items-center justify-center me-4"> <CiLinkedin size={24} className="text-white"/></div>
        <div className="w-10 h-10 bg-[#3D626C] rounded-full flex items-center justify-center me-4"> <FaTwitter size={24} className="text-white"/></div>
        <div className="w-10 h-10 bg-[#3D626C] rounded-full flex items-center justify-center me-4"> <FaWhatsapp size={24} className="text-white"/></div>
        <div className="w-10 h-10 bg-[#3D626C] rounded-full flex items-center justify-center "> <CiFacebook size={24} className="text-white"/></div>

        </div>
      </div>

      {/* Menu */}
      <div className="xl:w-1/3 lg:h-1/2 w-full flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 w-full mt-3 lg:mt-0">
          <p className="text-2xl font-bold text-white "> Quick Links</p>

          <ul>
            {footerQuickLinks.map((item) => {
              return (
                <li
                  key={item.id}
                  className="text-white p-2 xl:text-xl lg:text-lg text-sm flex items-baseline hover:text-[#1CA8CB]"
                >
                  <IoIosArrowForward className="mr-4" />{" "}
                  <Link href={"/"}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:w-1/2 w-full mt-3 lg:mt-0">
          <p className="text-2xl font-bold text-white "> Get In Touch</p>

          <div className="flex flex-col">
            <div className="flex items-center my-2">
              <div className="w-10 h-10 bg-[#3D626C] rounded-full flex items-center justify-center"> <FiPhoneCall className="text-white" size={24}/></div>

              <Link
                className="px-2 text-white  hover:text-[#1CA8CB]"
                href={"/"}
              >
                {" "}
                +989392409359
              </Link>
            </div>

            <div className="flex items-center my-2">
              <div className="w-10 h-10 bg-[#3D626C] rounded-full flex items-center justify-center"> <MdOutlineEmail className="text-white" size={24}/></div>
              <Link
                className="px-2 text-white  hover:text-[#1CA8CB]"
                href={"/"}
              >
                javadboroji2222@gmail.com
              </Link>
            </div>
            <div className="flex items-center my-2">
              <div className="w-10 h-10 bg-[#3D626C] rounded-full flex items-center justify-center"><CiLocationOn className="text-white" size={24}/></div>
              <Link
                className="px-2 text-white  hover:text-[#1CA8CB]"
                href={"/"}
              >
                Iran ,Tehran
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* instageram post */}
    </div>
  );
}

export default Main;
