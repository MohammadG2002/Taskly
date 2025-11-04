import React from "react";
import "./ProfileSidebar.css";

interface ProfileSidebarProps {
  show: boolean;
  onClose?: () => void;
}

const ProfileSidebar = ({ show, onClose }: ProfileSidebarProps) => {
  return show && <div className="profile-sidebar">test</div>;
};

export default ProfileSidebar;
