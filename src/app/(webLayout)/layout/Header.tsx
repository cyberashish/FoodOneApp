"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "/public/images/dark_logo.png";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname, useSearchParams } from "next/navigation";
import DropdownComp from "@/app/components/authentication/DropdownComp";



const Header: React.FC = () => {
const pathname = usePathname();
const [position ,setPosition] = useState("");
useEffect(()=>{

  const handleScroll = () =>{
     const scrollPosition = window.scrollY;
     if(scrollPosition>20){
      setPosition("activeheader");
     }
     else{
      setPosition("");
     }
  }
  window.addEventListener("scroll",handleScroll);

  


  return () => {
    window.removeEventListener("scroll",handleScroll);
  }
},[])

  return (
    <>
      <div className={`wrapper fixed top-0 w-full z-[21] ${position===""&&pathname!=="/"?'bg-body':pathname==="/"?'backdrop-blur-md bg-white/10':"bg-body"} `}>
        <div className="container mx-auto ">
          <div className="flex justify-between items-center py-4">
            <div className={`flex justify-between items-center gap-10 order-2 `}>
              <Link href='/'>
              <Image
                src={logo}
                alt="logo-image"
                className="md:scale-100 scale-90"
              />
              </Link>
              <ul className=" gap-8 lg:flex hidden">
                {NAV_LINKS.map((navLink) => {
                  return (
                    <li
                      key={navLink.key}
                      className={`text-lg font-medium  relative after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-[3px] after:bg-primary after:-translate-x-1/2 after:-translate-y-1/2 after:transition-[width] hover:after:w-full after:duration-500 ${pathname===navLink.href?`after:w-full`:null} ${pathname==="/"?"text-secondary":"text-primary "}`}
                    >
                      <Link href={navLink.href}>{navLink.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex justify-between items-center gap-7 order-last">

              <DropdownComp/>
              <button className="lg:text-base md:text-sm text-xs font-normal flex items-center gap-2 md:py-3 py-2.5 md:px-7 sm:px-6 px-5 bg-primary hover:bg-primaryEmphasis rounded-full text-white text-nowrap" >
                <Icon
                  icon="material-symbols:call"
                  className="lg:text-xl md:block hidden text-nowrap"
                />
                +91 7004500637
              </button>
 
            </div>
            <Icon
              icon="heroicons-solid:menu-alt-2" id="headerCollapse" data-hs-overlay="#application-sidebar-brand" aria-controls="application-sidebar-brand" aria-label="Toggle navigation"
              className="text-4xl lg:hidden block text-white order-1"
            />

          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
