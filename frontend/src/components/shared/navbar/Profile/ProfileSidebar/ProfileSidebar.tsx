import React from "react";
import "./ProfileSidebar.css";
import { assets } from "../../../../../assets/assets";
import users from "../../../../../mocks/users.json";
import Tooltip from "../../../../../utils/Tooltip/Tooltip";

interface ProfileSidebarProps {
  show: boolean;
  onClose?: () => void;
}

const ProfileSidebar = ({ show, onClose }: ProfileSidebarProps) => {
  const currentUserId = 1;
  const user = users.find((u) => u.id === currentUserId);
  if (!user) return null;
  return (
    <div
      className={`profile-sidebar__backdrop ${show ? "show" : ""}`}
      onClick={onClose}
    >
      <div
        className={`profile-sidebar__container ${show ? "show" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="profile-sidebar__close">
          <img src={assets.cancel} alt="Close" />
        </button>
        <div className="profile__container">
          <img
            src={user.avatar}
            alt="Profile Avatar"
            className="profile__icon"
          />
          <div className="profile__details">
            <h2 className="profile__name">{user.name}</h2>
            <p className="profile__email">{user.email}</p>
          </div>
          <div className="profile__switch">
            {users.map(
              (u, i) =>
                u.id !== currentUserId &&
                i <= 3 && (
                  <Tooltip key={u.id} text={`Switch to: ${u.name}`}>
                    <img
                      key={u.id}
                      src={u.avatar}
                      alt={u.name}
                      className="profile__switch__icon"
                    />
                  </Tooltip>
                )
            )}
            <Tooltip text="Switch to: New User">
              <div className="profile__switch__icon profile__switch__icon--new">
                +
              </div>
            </Tooltip>
          </div>
          <div className="profile-sidebar__navs">test</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
