"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
interface featuredProps {
  key?: String;
  icon: String;
  title: String;
  subtitle: String;
}


const FeaturedCard: React.FC<featuredProps> = ({ icon, title, subtitle }) => {
  return (
    <>
      <div className="lg:col-span-3 md:col-span-6 col-span-12 p-6 rounded-lg shadow-sm hover:bg-primary group transition-colors duration-200 cursor-pointer">
        <Icon
          icon={`${icon}`}
          className="text-5xl text-primary mb-4 group-hover:text-white transition-colors duration-200"
        />
        <h2 className="text-xl font-medium text-secondary mb-2 group-hover:text-white transition-colors duration-200">
          {title}
        </h2>
        <p className="text-secondary text-base font-display font-medium group-hover:text-white transition-colors duration-200">
          {subtitle}
        </p>
      </div>
    </>
  );
};

export default FeaturedCard;
