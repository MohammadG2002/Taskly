import React from "react";
import "./TaskAssignees.css";
import type { BoardCard } from "../../../../types/BoardCard";
import { assets } from "../../../../assets/assets";
import Tooltip from "../../../../utils/Tooltip/Tooltip";

const TaskAssignees = ({ card }: { card: BoardCard }) => {
  return (
    <div className="task-assignees-container">
      {card.assignees.map((assignee) => (
        <img
          key={assignee.id}
          src={assignee.avatar}
          alt={assignee.name}
          className="task-assignee-avatar"
        />
      ))}
      <Tooltip text="Add Assignee">
        <div className="add-assignee-container">+</div>
      </Tooltip>
    </div>
  );
};

export default TaskAssignees;
