import React from "react";
import "./Sidebar.css";

interface SidebarProps {
  isCollapsed: boolean;
  toggle: () => void;
}

export const Sidebar = ({ isCollapsed, toggle }: SidebarProps) => {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      Sidebar
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};
