import React from 'react'
import HeroSection from './Sections/HeroSection'
import Featuresection from './Sections/Featuresection'
import AboutSection from './Sections/AboutSection'
import MenuSection from './Sections/MenuSection'
import Bookingsection from './Sections/Bookingsection'
import TeamSection from './Sections/TeamSection'
import TestimonialSection from './Sections/TestimonialSection'
import PostData from './MiniComponents/PostData'


const Main = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection/>
      {/* Feature Section */}
        <Featuresection/>
        {/* About Section */}
        <AboutSection/>
        {/* Menu Section */}
        <MenuSection/>
        {/* Booking section */}
        <Bookingsection/>
        {/* Team Section */}
        <TeamSection/>
        {/* Testimonial Section */}
        <TestimonialSection/>
      
    </>
  )
}

export default Main
