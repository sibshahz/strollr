import React from "react";
import { NavLink, Outlet } from "react-router";
import { NavItemProps } from "../../types/nav.types";
import DashboardIcon from "../../assets/icons/dashboard.icon";
import ListingManagementIcon from "../../assets/icons/listing-managment.icon";
import UserManagementIcon from "../../assets/icons/user-managment.icon";
import SettingsIcon from "../../assets/icons/settings.icon";
import HelpIcon from "../../assets/icons/help.icon";
import LogoutIcon from "../../assets/icons/logout.icon";

const navIconProps = {
  width: "24",
  height: "24",
  fill: "#fff",
};

const mainNavItems: NavItemProps[] = [
  {
    icon: DashboardIcon,
    label: "Dashboard",
    link: "/",
  },
  {
    icon: ListingManagementIcon,
    link: "/listing",
    label: "Listing",
  },
  {
    icon: UserManagementIcon,
    link: "/user-management",
    label: "User Management",
  },
  {
    icon: SettingsIcon,
    link: "/settings",
    label: "Settings",
  },
];

const secondaryNavItems: NavItemProps[] = [
  {
    icon: HelpIcon,
    link: "/help",
    label: "Help",
  },
  {
    icon: LogoutIcon,
    link: "/logout",
    label: "Logout",
  },
];

const LogoComponent: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full gap-2 px-12 pl-0 py-16">
      <img src="/strollr_logo.png" alt="Strollr" className="w-12 h-12" />
      <h1 className="logoHeading lowercase">Strollr</h1>
    </div>
  );
};

const NavLinkComponent: React.FC<NavItemProps> = ({ icon, label, link }) => {
  return (
    <NavLink to={link}>
      {({ isActive }) => (
        <>
        <span className={
          `pre-nav-span
          ${isActive ? "active bg-primary-background rounded-br-full" : " bg-primary-main "}`
        }></span>
          <div
            className={`flex flex-row py-6 px-5 gap-[15px] items-center w-full text-text-contrast ${
              isActive
                ? "active text-primary-main bg-primary-background rounded-l-full"
                : ""
            }`}
          >
            <span role="img" aria-label={label}>
              {React.createElement(icon, {
                ...navIconProps,
                fill: isActive ? "#1A631B" : "#FFF", // Green for active, white for inactive
              })}
            </span>
            <span className="font-nunito font-normal text-lg tracking-wide">
              {label}
            </span>
          </div>
        <span className={
          `post-nav-span ${isActive ? "active" : ""}`
        }></span>
        </>
      )}
    </NavLink>
  );
};

const SideBar: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="nav-sidebar shrink-0 w-auto pl-10 bg-primary-main max-w-fit flex min-h-screen height-screen flex-col">
        <LogoComponent />
        <div className="nav-container flex flex-col justify-between h-full mt-4">
          <nav>
            {mainNavItems.map((item, index) => (
              <NavLinkComponent key={index} {...item} />
            ))}
          </nav>
          <nav className="mb-16">
            {secondaryNavItems.map((item, index) => (
              <NavLinkComponent key={index} {...item} />
            ))}
          </nav>
        </div>
      </div>
      <main className="w-full bg-primary-background">
        <Outlet />
      </main>
    </div>
  );
};

export default SideBar;
