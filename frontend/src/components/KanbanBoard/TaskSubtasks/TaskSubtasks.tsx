import { useMemo, useState } from "react";
import type { BoardCard } from "../../../types/BoardCard";
import "./TaskSubtasks.css";
import subtasksJson from "../../../mocks/subtasks.json";

type Subtask = {
  id: number;
  text: string;
  checked: boolean;
};

interface Props {
  selectedCard: BoardCard;
}

const TaskSubtasks = ({ selectedCard }: Props) => {
  const cardKey = String(selectedCard?.id ?? "");

  const initial: Subtask[] = useMemo(() => {
    // Prefer to read subtask ids from the selected card (canonical mapping).
    const data = subtasksJson as Record<string, Subtask[]>;
    const cardSubtaskIds: number[] | undefined = selectedCard?.subtasks;
    if (Array.isArray(cardSubtaskIds) && cardSubtaskIds.length > 0) {
      const result: Subtask[] = [];
      for (const id of cardSubtaskIds) {
        // search each key's array for the subtask with the matching id
        for (const key in data) {
          const found = data[key].find((s) => s.id === id);
          if (found) {
            result.push(found);
            break;
          }
        }
      }
      return result;
    }

    // fallback: try to look up by the card id as a key in the JSON
    const byKey = (subtasksJson as Record<string, Subtask[]>)[cardKey];
    return Array.isArray(byKey) ? byKey : [];
  }, [cardKey, selectedCard?.subtasks]);

  const [items, setItems] = useState<Subtask[]>(initial);
  const [newText, setNewText] = useState("");

  const completed = items.filter((s) => s.checked).length;
  const total = items.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  function toggle(id: number) {
    setItems((prev) => prev.map((s) => (s.id === id ? { ...s, checked: !s.checked } : s)));
  }

  function addSubtask() {
    if (!newText.trim()) return;
    const nextId = items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;
    const newSub: Subtask = { id: nextId, text: newText.trim(), checked: false };
    setItems((prev) => [...prev, newSub]);
    setNewText("");
  }

  return (
    <div className="task-subtasks-root">
      <div className="task-subtasks-header">
        <div className="task-subtasks-count">{`${completed} of ${total}`}</div>
        <div className="task-subtasks-progress">
          <div className="task-subtasks-progress-bar" style={{ width: `${percent}%` }} />
        </div>
      </div>

      <ul className="task-subtasks-list">
        {items.map((s) => (
          <li key={s.id} className="task-subtasks-item">
            <label>
              <input type="checkbox" checked={s.checked} onChange={() => toggle(s.id)} />
              <span className={s.checked ? "checked" : ""}>{s.text}</span>
            </label>
          </li>
        ))}
        {items.length === 0 && <li className="task-subtasks-empty">No subtasks yet</li>}
      </ul>

      <div className="task-subtasks-adder">
        <input
          placeholder="Add subtask"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addSubtask()}
        />
        <button onClick={addSubtask}>Add</button>
      </div>
    </div>
  );
};

export default TaskSubtasks;
