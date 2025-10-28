import React, { type ReactNode } from "react";
import "./Layout.css";
import { Sidebar } from "../shared/sidebar/Sidebar";
import { Navbar } from "../shared/navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-main">
        <Navbar />
        <main className="layout-content">{children}</main>
      </div>
    </div>
  );
};
