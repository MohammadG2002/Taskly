import React, { useEffect, useState } from "react";
import "./CardTitle.css";
import type { BoardCard } from "../../../../types/BoardCard";
import handleCardRename from "../../../../utils/handleCardRename";

interface CardTitleProps {
  selectedCard: BoardCard;
}

const CardTitle = ({ selectedCard }: CardTitleProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const [newTitle, setNewTitle] = useState(selectedCard.title);
  useEffect(() => {
    setIsEditable(false);
  }, [selectedCard]);
  return (
    <>
      {isEditable ? (
        <input
          type="text"
          value={newTitle}
          placeholder="Enter a new card name"
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={handleCardRename({
            selectedCard,
            newTitle,
            onClose: () => setIsEditable(false),
          })}
          onBlur={handleCardRename({
            selectedCard,
            newTitle,
            onClose: () => setIsEditable(false),
          })}
          autoFocus
        />
      ) : (
        <h2 onClick={() => setIsEditable(true)}>{selectedCard.title}</h2>
      )}
    </>
  );
};

export default CardTitle;
