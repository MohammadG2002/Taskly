import { useEffect, useState } from "react";
import "./TaskDescription.css";
import type { BoardCard } from "../../../../types/BoardCard";
import handleCardDescriptionChange from "../../../../utils/handleCardDescriptionChange";

const TaskDescription = ({ card }: { card: BoardCard }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [newDescription, setNewDescription] = useState(card.description);

  useEffect(() => {
    setIsEditable(false);
  }, [card]);

  return (
    <>
      {isEditable ? (
        <textarea
          value={newDescription}
          placeholder="Enter a description..."
          onChange={(e) => setNewDescription(e.target.value)}
          onKeyDown={handleCardDescriptionChange({
            selectedCard: card,
            newDescription,
            onClose: () => setIsEditable(false),
          })}
          onBlur={handleCardDescriptionChange({
            selectedCard: card,
            newDescription,
            onClose: () => setIsEditable(false),
          })}
          autoFocus
        />
      ) : (
        <p onClick={() => setIsEditable(true)}>
          {card.description || "Add a description..."}
        </p>
      )}
    </>
  );
};

export default TaskDescription;
