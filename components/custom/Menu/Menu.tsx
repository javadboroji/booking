"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logoBlack from "./../../../public/logo2.svg";
import logoWhite from "./../../../public/logo-white2.svg";
import { CiMenuFries } from "react-icons/ci";

import clsx from "clsx";
import Link from "next/link";
function Menu() {
  const menuList = [
    {
      id: "menu-1",
      label: "Contact Us",
      url: "/",
      child: [],
    },
    {
      id: "menu-2",
      label: "Blog",
      url: "/",
      child: [],
    },
    {
      id: "menu-3",
      label: "Services",
      url: "/",
      child: [
        {
          id: "menu-3-1",
          label: "Services-1",
          url: "/",
          child: [],
        },
        {
          id: "menu-3-2",
          label: "Services Detail",
          url: "/",
          child: [],
        },
      ],
    },
    {
      id: "menu-4",
      label: "Home",
      url: "/",
      child: [],
    },
  ];
  const [showMenu, setShowMenu] = useState(true);
  const [menuBg, setMenuBg] = useState("transition");
  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen(prev => !prev)
  }
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY <= 100) {
        setShowMenu(true);
        setMenuBg("transition");
      } else if (300 < scrollY && scrollY < 900) {
        setShowMenu(false);
      } else if (scrollY > 900) {
        setShowMenu(true);
        setMenuBg("black");
      }
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showMenu && (
      <div
        className={clsx(
          "w-full z-100 fixed top-0 left-0 right-0  px-4 flex flex-col md:flex-row  lg:justify-center items-center   transition-transform  duration-[8000ms] ease-in-out",
          showMenu ? "translate-y-0" : "-translate-y-full",
          menuBg === "transition" ? "bg-[#0000004b]" : "bg-black",
          open ? "h-[100dvh] md:h-[6rem] items-start !bg-black" : "h-[6rem]"
        )}
      >
        <div className="flex justify-between items-center w-full md:w-1/4">
          <Image src={logoWhite} alt="logo" className="w-[100px] lg:w-[110px] h-[100px] lg:h-[110px]" />
          <div className="md:hidden ">
            <button onClick={() => toggleMenu()} >
              <CiMenuFries size={24} className="text-white" />
            </button>
          </div>
        </div>
        <ul className={clsx(" items-center  md:flex",
          open ? "flex flex-col" : "hidden"

        )}>
          {menuList?.map((item) => {
            return (
              <li className="relative lg:px-14 md:p-8 p-4 " key={item.id}>
                <Link className="text-white  lg:font-bold lg:text-lg text-sm " href={item.url}>
                  {item.label}
                </Link>

                {item?.child.length > 0 && (
                  <ul className="absolute left-0 top-full bg-black py-4 px-2  m-0 w-full hidden">
                    {item.child.map((child) => {
                      return (
                        <li className="my-2" key={child.id}>
                          <Link
                            className="text-white p-2 font-bold md:text-sm"
                            href={child.url}
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}

export default Menu;
