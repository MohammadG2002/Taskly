import React, { useEffect, useState } from "react";
import "./CardTitle.css";
import type { BoardCard } from "../../../../types/BoardCard";
import handleCardChange from "../../../../utils/handleCardChange";

interface CardTitleProps {
  selectedCard: BoardCard;
}

const CardTitle = ({ selectedCard }: CardTitleProps) => {
  const [isEditable, setIsEditable] = useState(false);
  useEffect(() => {
    setIsEditable(false);
  }, [selectedCard]);
  return (
    <>
      {isEditable ? (
        <input
          type="text"
          className="kanban-card-title-input"
          defaultValue={selectedCard.title}
          autoFocus
          onBlur={() => setIsEditable(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const next = (e.target as HTMLInputElement).value.trim();
              if (next && next !== selectedCard.title) {
                handleCardChange({
                  cardId: selectedCard.id,
                  updates: { title: next },
                });
              }
              setIsEditable(false);
            } else if (e.key === "Escape") {
              setIsEditable(false);
            }
          }}
        />
      ) : (
        <div onClick={() => setIsEditable(true)}>{selectedCard.title}</div>
      )}
    </>
  );
};

export default CardTitle;
