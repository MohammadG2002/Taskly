import { useEffect, useState } from "react";
import "./CardTitle.css";
import type { BoardCard } from "../../../../types/BoardCard";
import handleCardRename from "../../../../utils/handleCardRename";

interface CardTitleProps {
  selectedCard: BoardCard;
}

const CardTitle = ({ selectedCard }: CardTitleProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [newTitle, setNewTitle] = useState(selectedCard.title);
  useEffect(() => {
    setIsFocused(false);
  }, [selectedCard]);
  return (
    <div className="card-title-container">
      <input
        type="text"
        className={`card-title-input ${isFocused ? "focused" : ""}`}
        value={newTitle}
        placeholder="Enter a new card name"
        onChange={(e) => setNewTitle(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onKeyDown={handleCardRename({
          selectedCard,
          newTitle,
          onClose: () => setIsFocused(false),
        })}
        onBlur={handleCardRename({
          selectedCard,
          newTitle,
          onClose: () => setIsFocused(false),
        })}
      />
    </div>
  );
};

export default CardTitle;
