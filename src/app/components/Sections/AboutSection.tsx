"use client"

import Image from "next/image"
import aboutimage from "/public/images/about_bg.png"
import { Icon } from "@iconify/react/dist/iconify.js"

const AboutSection:React.FC = () => {
  return (
    <>
      <div className="container py-12">
         <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-6 col-span-12">
               <Image src={aboutimage} alt="about-image" className="w-full max-w-full" />
            </div>
            <div className="lg:col-span-6 col-span-12 lg:mt-32 mt-0">
                <span className="text-xl font-normal font-body text-primary">about us</span>
                <h2 className="md:text-[40px] text-4xl font-medium sm:flex text-black items-center"><span className="flex items-center" >Welcome to <Icon icon='emojione-monotone:fork-and-knife' className="md:text-6xl text-5xl text-primary px-2" /></span> <span>Food One</span></h2>
                <p className="font-display font-medium text-base text-secondary mt-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                <p className="font-display font-medium text-base text-secondary mt-6">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div className="md:flex gap-20  items-center md: mt-6">
                  <div className="flex gap-6 items-center px-6 rounded-lg border-s-[5px] md:mb-0 mb-6 border-primary">
                        <span className="text-5xl font-medium text-primary">15</span>
                        <div className="flex flex-col">
                          <span className="text-base font-display text-secondary font-medium">Years Of</span>
                          <span className="text-base font-xtrabold font-display text-black leading-tight uppercase">Experience</span>
                        </div>
                  </div>
                  <div className="flex gap-6 items-center px-6 rounded-lg border-s-[5px] border-primary">
                        <span className="text-5xl font-medium text-primary">50</span>
                        <div className="flex flex-col">
                          <span className="text-base font-display text-secondary font-medium">Popular</span>
                          <span className="text-base font-xtrabold font-display text-black leading-tight uppercase">MASTER CHEFS</span>
                        </div>
                  </div>
                </div>
                <div className="btn uppercase w-fit mt-8">Read more</div>
            </div>
         </div>
      </div>
    </>
  )
}

export default AboutSection
