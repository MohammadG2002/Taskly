import React from "react";
import "./SidebarLink.css";
import { Link } from "react-router-dom";

const SidebarLink = () => {
  return (
    <Link to="/kanban" className="sidebar-link">
      Kanban
    </Link>
  );
};

export default SidebarLink;
