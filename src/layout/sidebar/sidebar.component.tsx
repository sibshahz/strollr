import React from "react";
import { NavLink, Outlet } from "react-router";


const SideBar: React.FC = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Dashboard
        </NavLink>
        <NavLink to="/listing" end>
          Listing
        </NavLink>
        <NavLink to="/user-management">User Management</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
      <main>
        <Outlet /> {/* This renders the matched child route */}
      </main>
    </>
  );
};

export default SideBar;
