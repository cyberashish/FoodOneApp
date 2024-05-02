import React, { useReducer } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useCounter } from "@/store/SidebarStore";
import { usePathname } from "next/navigation";


interface sidebarItems{
  key?:String,
  href:URL,
  label:String,
  icon:String,
}


const SidebarItem:React.FC<sidebarItems> = ({href,label,icon}) => {
   const pathname = usePathname();
  return (
    <>
    <Link href={href}>
      <div className={`flex gap-3.5 items-center py-2.5 my-0.5 px-3 ${pathname===href.pathname?`bg-primary text-white hover:bg-primary hover:text-white`:null} text-black hover:bg-lightPrimary hover:text-primary rounded-md cursor-pointer`}>
        <Icon icon={`${icon}`} className="text-xl" />
        <span className="text-base font-light">{label}</span>
      </div>
      </Link>
    </>
  );
};

export default SidebarItem;
