"use client"

import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"
import user from "/public/images/testimonial-1.jpg"

const TestimonialCard = () => {
  return (
    <>
      <div className="flex flex-col p-6 gap-6 shadow-md border">
          <Icon icon='bi:quote' className="text-4xl text-primary" />
          <p className="text-base font-display font-medium text-black">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
          <div className="flex gap-4 items-center">
             <Image src={user} alt="user-img" className="rounded-full w-14 h-14" />
             <div className="flex flex-col">
                 <h3 className="font-medium text-xl">Client Name</h3>
                 <p className="text-base font-display font-medium">Profession</p>
             </div>
          </div>
      </div>
    </>
  )
}

export default TestimonialCard
