import React from "react";
import "./TaskOverview.css";
import type { BoardCard } from "../../../types/BoardCard";
import CardTitle from "./CardTitle/CardTitle";
import TaskReporter from "./TaskReporter/TaskReporter";
import TaskAssignees from "./TaskAssignees/TaskAssignees";
import TaskLabels from "./TaskLabels/TaskLabels";
import TaskDueDate from "./TaskDueDate/TaskDueDate";
import TaskPriority from "./TaskPriority/TaskPriority";
import TaskDescription from "./TaskDescription/TaskDescription";
import TaskAttachments from "./TaskAttachments/TaskAttachments";
import sections from "./sections";

interface TaskOverviewProps {
  selectedCard: BoardCard;
}

const TaskOverview = ({ selectedCard }: TaskOverviewProps) => {
  return (
    <div>
      <CardTitle selectedCard={selectedCard} />
      <div className="task-overview-container">
        {sections.map((section) => (
          <React.Fragment key={section.label}>
            <div className="task-field">
              <h4>{section.label}</h4>
              <section.component card={selectedCard} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TaskOverview;
