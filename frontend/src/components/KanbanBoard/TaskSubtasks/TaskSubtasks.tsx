import { useMemo, useState } from "react";
import type { BoardCard } from "../../../types/BoardCard";
import "./TaskSubtasks.css";
import {
  getInitialSubtasks,
  type Subtask,
} from "../../../utils/getInitialSubtasks";
import { getSubtasksProgress } from "../../../utils/getSubtasksProgress";
import {
  toggleSubtask,
  addSubtaskItem,
} from "../../../utils/subtasksHandlers";

interface Props {
  selectedCard: BoardCard;
}

const TaskSubtasks = ({ selectedCard }: Props) => {
  const initial = useMemo(
    () => getInitialSubtasks(selectedCard?.id, selectedCard?.subtasks),
    [selectedCard?.id, selectedCard?.subtasks]
  );

  const [items, setItems] = useState<Subtask[]>(initial);
  const [newText, setNewText] = useState("");

  const { completed, total, percent } = getSubtasksProgress(items);

  const handleToggle = (id: number) => {
    setItems((prev) => toggleSubtask(prev, id));
  };

  const handleAddSubtask = () => {
    setItems((prev) => addSubtaskItem(prev, newText));
    setNewText("");
  };

  return (
    <div className="task-subtasks-root">
      <div className="task-subtasks-header">
        <div className="task-subtasks-count">{`${completed} of ${total}`}</div>
        <div className="task-subtasks-progress">
          <div
            className="task-subtasks-progress-bar"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <ul className="task-subtasks-list">
        {items.map((s) => (
          <li key={s.id} className="task-subtasks-item">
            <label>
              <input
                type="checkbox"
                checked={s.checked}
                onChange={() => handleToggle(s.id)}
              />
              <span className={s.checked ? "checked" : ""}>{s.text}</span>
            </label>
          </li>
        ))}
        {items.length === 0 && (
          <li className="task-subtasks-empty">No subtasks yet</li>
        )}
      </ul>

      <div className="task-subtasks-adder">
        <input
          placeholder="Add subtask"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddSubtask()}
        />
        <button type="button" onClick={handleAddSubtask}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskSubtasks;
