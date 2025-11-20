import React, { useState, useRef } from "react";
import "@caldwell619/react-kanban/dist/styles.css";
import handleCardNew from "../../../utils/handleCardNew";
import "./ColumnHeader.css";
import NewCardBtn from "../NewCardBtn/NewCardBtn";
import ColumnOptionsBtn from "../ColumnOptionsBtn/ColumnOptionsBtn";
import ColumnTitle from "../ColumnTitle/ColumnTitle";
import useClickOutside from "../../../hooks/useClickOutside";
import { assets } from "../../../assets/assets";

export interface ColumnHeaderBag<TCard> {
  removeColumn: () => void;
  renameColumn: (title: string) => void;
  addCard: (card: TCard, options?: { on: "top" | "bottom" }) => void;
}

export interface CardType {
  columnId: number;
  id: number;
  title: string;
  reporter: string;
  labels: string[];
  dueDate: string;
  priority: "low" | "medium" | "high";
  description: string;
  attachments: any[];
  assignees: string[];
  subtasks: any[];
  comments: any[];
}

export interface ColumnHeaderProps {
  column: {
    id: number;
    title: number | string;
    cards: any[];
    [key: string]: any;
  };
  bag: ColumnHeaderBag<CardType>;
}

const ColumnHeader = ({ column, bag }: ColumnHeaderProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const [newCard, setNewCard] = useState(false);
  const containerRef = useRef<HTMLDivElement>(
    null as unknown as HTMLDivElement
  );
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
          onKeyDown={(e) => {
            handleCardNew({ e, column, bag, setNewCard });
          }}
          autoFocus
          ref={inputRef}
        />
      )}
    </div>
  );
};

export default ColumnHeader;
