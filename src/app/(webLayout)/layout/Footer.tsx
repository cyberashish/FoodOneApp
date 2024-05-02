"use client"
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import logo from "/public/images/dark_logo.png"
import Image from 'next/image'
export default function Footer() {
  return (
    <>
      <footer className='bg-body text-lightgray font-normal'>
        <div className="footerSection container">
            <div className="topSection grid grid-cols-12 gap-6 py-[100px] ">
                <div className="leftBlock lg:col-span-5 col-span-12 lg:pe-20 pe-0">
                    {/* <h1 className='text-4xl font-medium text-white '>FoodOne</h1> */}
                    <Image src={logo} alt="image" className='img-fluid' />
                    <p className='text-sm mt-4 mb-6'>Making the world a better place through constructing elegant hierarchies.</p>
                    <div className="social flex gap-3 mb-10">
                    <Icon icon='ri:facebook-fill' className='text-lg text-white hover:text-primary cursor-pointer' />
                    <Icon icon='mdi:twitter' className='text-lg text-white hover:text-primary cursor-pointer' />
                    <Icon icon='ri:instagram-line' className='text-lg text-white hover:text-primary cursor-pointer' />
                    <Icon icon='mdi:linkedin' className='text-lg text-white hover:text-primary cursor-pointer' />
                    <Icon icon='mdi:youtube' className='text-lg text-white hover:text-primary cursor-pointer' />
                    <Icon icon='mdi:pinterest' className='text-lg text-white hover:text-primary cursor-pointer' />
                    </div>
                    <p className="para">Designed and Developed by UIdeck</p>
                </div>
                <div className="rightBlock lg:col-span-7 col-span-12">
                  <div className="grid grid-cols-12 gap-6">
                  <div className="miniBlock lg:col-span-3 md:col-span-6 col-span-12">
                        <div className="upper mb-8">
                            <h1 className='text-lg'>Solutions</h1>
                        </div>
                        <div className="lower flex flex-col gap-3">
                            <p className='hover:text-primary cursor-pointer'>Marketing</p>
                            <p className='hover:text-primary cursor-pointer'>Analytics</p>
                            <p className='hover:text-primary cursor-pointer'>Commerce</p>
                            <p className='hover:text-primary cursor-pointer'>Insights</p>
                            <p className='hover:text-primary cursor-pointer'>Promotion</p>
                        </div>
                    </div>
                    <div className="miniBlock lg:col-span-3 md:col-span-6 col-span-12">
                        <div className="upper">
                            <h1 className='text-lg mb-8'>Support</h1>
                        </div>
                        <div className="lower flex flex-col gap-3">
                            <p className='hover:text-primary cursor-pointer'>Pricing</p>
                            <p className='hover:text-primary cursor-pointer'>Documentation</p>
                            <p className='hover:text-primary cursor-pointer'>Guides</p>
                            <p className='hover:text-primary cursor-pointer'>API Status</p>
                            <p className='hover:text-primary cursor-pointer'>Live Support</p>
                        </div>
                    </div>
                    <div className="miniBlock lg:col-span-3 md:col-span-6 col-span-12">
                        <div className="upper ">
                            <h1 className='text-lg mb-8'>Company</h1>
                        </div>
                        <div className="lower flex flex-col gap-3">
                            <p className='hover:text-primary cursor-pointer'>About Us</p>
                            <p className='hover:text-primary cursor-pointer'>Our Blog</p>
                            <p className='hover:text-primary cursor-pointer'>Jobs</p>
                            <p className='hover:text-primary cursor-pointer'>Press</p>
                            <p className='hover:text-primary cursor-pointer'>Contact Us</p>
                        </div>
                    </div>
                    <div className="miniBlock lg:col-span-3 md:col-span-6 col-span-12">
                        <div className="upper">
                            <h1 className='text-lg mb-8'>Legal</h1>
                        </div>
                        <div className="lower flex flex-col gap-3">
                            <p className='hover:text-primary cursor-pointer'>Terms & Conditions</p>
                            <p className='hover:text-primary cursor-pointer'>Privacy Policy</p>
                            <p className='hover:text-primary cursor-pointer'>Catering Services</p>
                            <p className='hover:text-primary cursor-pointer'>Customer Relations</p>
                            <p className='hover:text-primary cursor-pointer'>Innovation</p>
                        </div>
                    </div>
                  </div>

                </div>
            </div>
        </div>
      </footer>
    </>
  )
}
