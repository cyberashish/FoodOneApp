import React from "react";
import "../../layout.css";

const HeroSection = () => {
  return (
    <>
      <div className="absolute top-1/2  -translate-y-1/2 w-full z-[20]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="2xl:col-span-5 xl:col-span-6 lg:col-span-8 col-span-12">
              <h2 className="md:text-[64px] text-4xl font-medium lg:text-secondary text-white leading-tight">
                Meet, Eat & Enjoy the true test
              </h2>
              <p className="md:text-xl text-lg lg:text-secondary text-white font-normal mt-5 font-display">
                Making a reservation at Délicious restaurant is easy and takes
                just a couple of minutes.
              </p>
              <div className="flex gap-2 mt-10 md:flex-row flex-col">
                <button className="md:py-5 py-4 md:px-14 px-12 text-lg bg-primary hover:bg-primaryEmphasis font-semibold text-white rounded-full shadow-primaryShadow hover:shadow-primaryEmShadow leading-normal">
                  Book a Table
                </button>
                <button className="md:py-5 py-4 md:px-14 px-12 text-lg border-2 border-primary hover:text-white hover:bg-primary font-medium text-primary rounded-full transiton ease-in-out duration-300 leading-normal">
                  Our Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-screen">
        <div className="lg:w-3/5 w-0/5"></div>
        <div className="lg:w-2/5 w-full banner relative after:absolute after:w-full after:h-full lg:after:bg-gray-950/10 after:bg-gray-950/60"></div>
      </div>
      
    </>
  );
};

export default HeroSection;
