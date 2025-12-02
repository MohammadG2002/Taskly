import { useEffect, useState } from "react";
import "./TaskDescription.css";
import type { BoardCard } from "../../../../types/BoardCard";
import handleCardDescriptionChange from "../../../../utils/handleCardDescriptionChange";

const TaskDescription = ({ card }: { card: BoardCard }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [newDescription, setNewDescription] = useState(card.description);

  useEffect(() => {
    setIsFocused(false);
    setNewDescription(card.description);
  }, [card]);

  return (
    <textarea
      className={`task-description-textarea ${isFocused ? "focused" : ""}`}
      value={newDescription}
      placeholder="Add a description..."
      onChange={(e) => setNewDescription(e.target.value)}
      onFocus={() => setIsFocused(true)}
      onKeyDown={handleCardDescriptionChange({
        selectedCard: card,
        newDescription,
        onClose: () => setIsFocused(false),
      })}
      onBlur={handleCardDescriptionChange({
        selectedCard: card,
        newDescription,
        onClose: () => setIsFocused(false),
      })}
    />
  );
};

export default TaskDescription;
