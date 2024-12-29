import { IconProps } from "./icon.types";

export interface NavItemProps {
  icon: React.FC<IconProps>;
  label: string;
  link: string;
  isActive?: boolean;
}

export interface SubNavItemProps {
  label: string;
  isActive?: boolean;
}