"use client";
import Image from "next/image";
import chef1 from "/public/images/team-1.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";

interface temaProps {
    key?:String,
    img:String | any,
    title:String,
    designation:String
}

const TeamCard:React.FC<temaProps> = ({img,title,designation}) => {
  return (
    <>
      <div className="lg:col-span-3 col-span-12 p-6 pb-0 rounded-lg shadow-sm group parent-team">
        <Image src={img} alt="img" className="rounded-full overflow-hidden" />
        <h4 className="text-xl font-medium text-black mt-6 text-center">
          {title}
        </h4>
        <p className="text-sm font-display text-black text-center">
          {designation}
        </p>
        <div className="team mt-4 flex justify-center">
          <div className="flex overflow-hidden gap-2">
            <span className="p-3 pt-4 bg-primary rounded-t-full overflow-hidden cursor-pointer border-primary border-2 hover:bg-transparent hover:text-primary text-white">
        
              <Icon icon="eva:facebook-fill" className=" text-xl" />
            </span>
            <span className="p-3 pt-4 bg-primary rounded-t-full overflow-hidden cursor-pointer border-primary border-2 hover:bg-transparent hover:text-primary text-white">
     
              <Icon icon="mdi:instagram" className=" text-xl" />
            </span>
            <span className="p-3 pt-4 bg-primary rounded-t-full overflow-hidden cursor-pointer border-primary border-2 hover:bg-transparent hover:text-primary text-white">
         
              <Icon icon="mdi:twitter" className=" text-xl" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
