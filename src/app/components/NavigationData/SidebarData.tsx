"use client"

import Image from "next/image";
import logo from "/public/images/dark_logo.png"
import SidebarItem from "../MiniComponents/SidebarItem";
import { SIDEBAR_ITEMS } from "@/constants";
import { useEffect, useState } from "react";

const SidebarData = () => {
  const [path,setPath] = useState('');
  useEffect(()=>{
    let pathdata = window.location.href;
     setPath(pathdata);
  },[])
  return (
    <>
      <div
        id="application-sidebar-brand"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full maxapplication-sidebar-brand-w-xs w-[270px] z-[80] bg-white border-e  "
      >
        <div className="flex justify-between items-center py-3 px-4 border-b ">
           <Image src={logo} alt="logo-image" />
        </div>
        <div className="p-4">
          {path===""?null:SIDEBAR_ITEMS.map((item)=>{
            return(
              <SidebarItem key={item.key} href={new URL(item.href,window.location.href)} label={item.label} icon={item.icon} />
            )
          })}
        </div>
      </div>
    </>
  );
};

export default SidebarData;
