import * as React from "react";
import { NavItemProps } from "../../types/nav.types";

export const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => {
  return (
    <div className="flex gap-4 items-center py-5 w-full whitespace-nowrap">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      <div className={`self-stretch my-auto ${isActive ? "font-bold text-green-900" : ""}`}>
        {label}
      </div>
    </div>
  );
};