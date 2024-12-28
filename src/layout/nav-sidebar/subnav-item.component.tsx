import * as React from "react";
import { SubNavItemProps } from "../../types/nav.types";

export const SubNavItem: React.FC<SubNavItemProps> = ({ label, isActive }) => {
  return (
    <div className={`py-5 pl-10 w-full whitespace-nowrap ${isActive ? "font-bold text-green-900" : ""}`}>
      {label}
    </div>
  );
};