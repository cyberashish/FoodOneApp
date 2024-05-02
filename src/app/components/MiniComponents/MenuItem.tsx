"use client"

import Image from "next/image"

interface MenuCardProps {
    key?:String,
    img:string | any,
    title:String,
    subtitle:String,
     price:String
}

const MenuItem:React.FC<MenuCardProps> = ({img,title,subtitle,price}) => {
  return (
    <>
            <div className="lg:col-span-6 col-span-12">
        <div className="flex justify-between items-start">
            <div className="flex gap-4 items-center">
                <Image src={img} alt="menu-image" className="rounded-md"/>
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-medium text-black">{title}</h3>
                    <p className="font-display text-sm font-medium text-black">{subtitle}</p>
                </div>
            </div>
            <h3 className="font-medium text-primary text-xl">{`$${price}`}</h3>
        </div>
      </div>
    </>
  )
}

export default MenuItem
