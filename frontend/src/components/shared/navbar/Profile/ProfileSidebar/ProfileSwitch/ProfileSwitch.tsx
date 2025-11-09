import React from "react";
import "./ProfileSwitch.css";
import Tooltip from "../../../../../../utils/Tooltip/Tooltip";
import users from "../../../../../../mocks/users.json";

interface ProfileSwitchProps {
  currentUserId: number;
}

const ProfileSwitch = ({ currentUserId }: ProfileSwitchProps) => {
  return (
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
      <Tooltip text="Add account">
        <div className="profile__switch__icon profile__switch__icon--new">
          +
        </div>
      </Tooltip>
    </div>
  );
};

export default ProfileSwitch;
