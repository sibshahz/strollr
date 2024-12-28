import * as React from "react";
import { NavItem } from "./nav-item.component";
import { SubNavItem } from "./subnav-item.component";

const mainNavItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/49bb756e0fd11fa9d294f1f74b96013da1c00f44dcaeb0b1d597fc8970ac03fa?placeholderIfAbsent=true&apiKey=72805438ae414b4f87c0dbdd186ec663", label: "Dashboard" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/392ee87499f5fea4c8f7835eaf1328bbddfa8c9663dea2237ada2b3a107d118e?placeholderIfAbsent=true&apiKey=72805438ae414b4f87c0dbdd186ec663", label: "Listing Management" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/027586feeab585683f8c51e480bad5acf3c9ea70d370323f261b5eb2d9953b78?placeholderIfAbsent=true&apiKey=72805438ae414b4f87c0dbdd186ec663", label: "User Management" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aeb8c634f72ddad69e3e6fe437f413646364f2a87b75def7259df4b29ab4e6e6?placeholderIfAbsent=true&apiKey=72805438ae414b4f87c0dbdd186ec663", label: "Settings" }
];

const subNavItems = [
  { label: "Businesses", isActive: true },
  { label: "Venues" },
  { label: "Activities" }
];

const bottomNavItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cdba45030dfb240021056b9be4dcd03301342587e11e85f842dfe9d05983d3f?placeholderIfAbsent=true&apiKey=72805438ae414b4f87c0dbdd186ec663", label: "Help" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6376e9720430450ab5c40eec82ceaf4afb811d2c942afc0bae15afccb746c60?placeholderIfAbsent=true&apiKey=72805438ae414b4f87c0dbdd186ec663", label: "Logout" }
];

export const NavigationSidebar: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto w-full max-w-[480px]">
      <div className="flex overflow-hidden relative flex-col px-8 py-16 w-full aspect-[0.32] fill-green-900">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc72dbafde3acdc2970670c5b145bdc9f63deb860a62e48b7fe51df3ac6daae1?placeholderIfAbsent=true&apiKey=72805438ae414b4f87c0dbdd186ec663"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative justify-center items-center w-full text-5xl tracking-wide leading-none whitespace-nowrap min-h-[44px] text-stone-100">
          <div className="flex gap-2 items-center self-stretch my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb2d2cd5b92b5a348a871a73e0257840a5662f69f29390261460de6ed6e693f0?placeholderIfAbsent=true&apiKey=72805438ae414b4f87c0dbdd186ec663"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.07] w-[47px]"
            />
            <div className="self-stretch my-auto">strollr</div>
          </div>
        </div>
        <div className="flex relative flex-col justify-between mt-32 text-lg font-semibold tracking-wider leading-loose text-center text-white min-h-[815px]">
          <div className="flex flex-col justify-center px-5 w-full">
            {mainNavItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
            {subNavItems.map((item, index) => (
              <SubNavItem key={index} {...item} />
            ))}
          </div>
          <div className="flex flex-col justify-center px-5 mt-52 w-full whitespace-nowrap">
            {bottomNavItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};