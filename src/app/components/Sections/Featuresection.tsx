"use client"
import { FEATURED_CARDS } from "@/constants"
import FeaturedCard from "../MiniComponents/FeaturedCard"

const Featuresection:React.FC = () => {
  return (
    <>
      <div className="container pt-24 pb-12">
         <div className="grid grid-cols-12 gap-6">
         {FEATURED_CARDS.map((card)=>{
        return (<FeaturedCard key={card.key} icon={card.icon} title={card.title} subtitle={card.subtitle}/>)
      })}
         </div>
      </div>
    </>
  )
}

export default Featuresection
