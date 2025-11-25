import { useState, useRef } from "react";
import "@caldwell619/react-kanban/dist/styles.css";
import "./ColumnHeader.css";
import NewCardBtn from "../NewCardBtn/NewCardBtn";
import ColumnOptionsBtn from "../ColumnOptionsBtn/ColumnOptionsBtn";
import ColumnTitle from "../ColumnTitle/ColumnTitle";
import useClickOutside from "../../../hooks/useClickOutside";
import { assets } from "../../../assets/assets";
import createNewCardKeyDownHandler from "../../../utils/createNewCardKeyDownHandler";
import type { ColumnHeaderProps } from "../../../types/ColumnHeaderProps";

const ColumnHeader = ({ column, bag }: ColumnHeaderProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const [newCard, setNewCard] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside<HTMLDivElement>({
    ref: containerRef,
    onClickOutside: () => setNewCard(false),
  });

  return (
    <div className="kanban-column-header-conainer" ref={containerRef}>
      <div className="kanban-column-header">
        <span className="kanban-column-counter">{column.cards.length}</span>
        <ColumnTitle
          column={column}
          bag={bag}
          containerRef={containerRef}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
        />
        <div className="kanban-action-buttons">
          <NewCardBtn setNewCard={setNewCard} />
          <ColumnOptionsBtn
            column={column}
            bag={bag}
            containerRef={containerRef}
            setIsEditable={setIsEditable}
          />
        </div>
        <img src={assets.sixDots} alt="Options" className="six-dots" />
      </div>
      {newCard && (
        <input
          type="text"
          className="kanban-new-card-input"
          onKeyDown={createNewCardKeyDownHandler({ column, bag, setNewCard })}
          autoFocus
          ref={inputRef}
        />
      )}
    </div>
  );
};

export default ColumnHeader;
