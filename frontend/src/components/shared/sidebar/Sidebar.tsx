import React, { useState } from "react";
import "./Sidebar.css";
import SidebarLogo from "./SidebarLogo/SidebarLogo";
import { assets } from "../../../assets/assets";
import SidebarLink from "./SidebarLink/SidebarLink";

interface SidebarProps {
  isCollapsed: boolean;
  toggle: () => void;
}

export const Sidebar = ({ isCollapsed, toggle }: SidebarProps) => {
  const [isOverviewOpen, setIsOverviewOpen] = useState(true);
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <SidebarLogo />
      <nav className="sidebar-overview">
        <h2
          className="overview-header"
          onClick={() => setIsOverviewOpen((prev) => !prev)}
        >
          <span className={`down-arrow ${!isOverviewOpen && "closed"}`}>
            <img src={assets.downArrow} alt="V" className="image" />
          </span>
          Overview
        </h2>
        <ul className={`overview-links ${!isOverviewOpen && "closed"}`}>
          <SidebarLink />
        </ul>
      </nav>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};
