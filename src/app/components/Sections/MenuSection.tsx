"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Menu_Card, Menu_Card2, Menu_Card3 } from "@/constants";
import MenuItem from "../MiniComponents/MenuItem";
const MenuSection = () => {
  return (
    <>
      <div className="container py-12 ">
        <div className="flex justify-center">
          <span className="text-xl relative font-body text-primary after:absolute after:-right-12 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-0.5 after:bg-primary before:absolute before:top-1/2 before:-left-12 before:-translate-y-1/2 before:w-10 before:h-0.5 before:bg-primary">
            Food One
          </span>
        </div>
        <h2 className="text-[40px] font-medium text-secondary text-center">
          Most Popular Items
        </h2>

        <div className="flex justify-center">
          <nav
            className="pb-1 flex space-x-4 overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-4 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary active"
              id="horizontal-scroll-tab-item-1"
              data-hs-tab="#horizontal-scroll-tab-preview"
              aria-controls="horizontal-scroll-tab-preview"
              role="tab"
            >
              <Icon icon="mdi:tea" className="text-4xl text-primary" />
              <div>
                <p className="font-display text-sm font-medium text-secondary text-left">
                  Popular
                </p>
                <p className=" text-base font-medium text-secondary leading-tight">
                  Breakfast
                </p>
              </div>
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-4 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary"
              id="horizontal-scroll-tab-item-2"
              data-hs-tab="#horizontal-scroll-tab-2"
              aria-controls="horizontal-scroll-tab-2"
              role="tab"
            >
              <Icon icon="fa6-solid:burger" className="text-3xl text-primary" />
              <div>
                <p className="font-display text-sm font-medium text-secondary text-left">
                  Special
                </p>
                <p className=" text-base font-medium text-secondary leading-tight">
                  Lunch
                </p>
              </div>
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-4 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary"
              id="horizontal-scroll-tab-item-3"
              data-hs-tab="#horizontal-scroll-tab-3"
              aria-controls="horizontal-scroll-tab-3"
              role="tab"
            >
              <Icon
                icon="emojione-monotone:fork-and-knife"
                className="text-3xl text-primary"
              />
              <div>
                <p className="font-display text-sm font-medium text-secondary text-left">
                  Lovely
                </p>
                <p className=" text-base font-medium text-secondary leading-tight">
                  Dinner
                </p>
              </div>
            </button>
          </nav>
        </div>

        <div className="mt-12">
          <div
            id="horizontal-scroll-tab-preview"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-1"
          >
            <div className="grid grid-cols-12 gap-6">
              {Menu_Card.map((menu) => {
                return (
                  <MenuItem
                    key={menu.key}
                    img={menu.image}
                    title={menu.title}
                    subtitle={menu.subtitle}
                    price={menu.rate}
                  />
                );
              })}
            </div>
          </div>
          <div
            id="horizontal-scroll-tab-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-2"
          >
            <div className="grid grid-cols-12 gap-6">
              {Menu_Card2.map((menu) => {
                return (
                  <MenuItem
                    key={menu.key}
                    img={menu.image}
                    title={menu.title}
                    subtitle={menu.subtitle}
                    price={menu.rate}
                  />
                );
              })}
            </div>
          </div>
          <div
            id="horizontal-scroll-tab-3"
            className="hidden"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-3"
          >
            <div className="grid grid-cols-12 gap-6">
              {Menu_Card3.map((menu) => {
                return (
                  <MenuItem
                    key={menu.key}
                    img={menu.image}
                    title={menu.title}
                    subtitle={menu.subtitle}
                    price={menu.rate}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSection;
