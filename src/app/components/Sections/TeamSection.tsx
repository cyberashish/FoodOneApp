"use client"

import { TEAM_CardS } from "@/constants"
import TeamCard from "../MiniComponents/TeamCard"


const TeamSection = () => {
  return (
    <>
      <div className="container py-12">
      <div className="flex justify-center items-center">
          <span className="text-xl relative font-body text-primary after:absolute after:-right-12 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-0.5 after:bg-primary before:absolute before:top-1/2 before:-left-12 before:-translate-y-1/2 before:w-10 before:h-0.5 before:bg-primary">
          Team Members
          </span>
        </div>
        <h2 className="text-[40px] font-medium text-secondary text-center">
        Our Master Chefs
        </h2>
         <div className="grid grid-cols-12 mt-12 gap-6 items-center">
           {TEAM_CardS.map((card)=>{
            return (<TeamCard key={card.key} img={card.image} title={card.title} designation={card.designation} />)
           })}
         </div>
      </div>
    </>
  )
}

export default TeamSection

