import { useState } from "react";
import type { BoardCard } from "../../../../types/BoardCard";
import { Priority } from "../../../../types/Priority";
import { handleCardPriority } from "../../../../utils/handleCardPriority";

interface TaskPriorityProps {
  card: BoardCard;
}

const TaskPriority = ({ card }: TaskPriorityProps) => {
  const [activePriority, setActivePriority] = useState(card.priority);

  return (
    <div>
      <button
        className={`task-priority-button ${
          activePriority === Priority.Low ? "active" : ""
        }`}
        onClick={() =>
          handleCardPriority(card, Priority.Low, setActivePriority)
        }
      >
        Low
      </button>
      <button
        className={`task-priority-button ${
          activePriority === Priority.Medium ? "active" : ""
        }`}
        onClick={() =>
          handleCardPriority(card, Priority.Medium, setActivePriority)
        }
      >
        Medium
      </button>
      <button
        className={`task-priority-button ${
          activePriority === Priority.High ? "active" : ""
        }`}
        onClick={() =>
          handleCardPriority(card, Priority.High, setActivePriority)
        }
      >
        High
      </button>
    </div>
  );
};

export default TaskPriority;
