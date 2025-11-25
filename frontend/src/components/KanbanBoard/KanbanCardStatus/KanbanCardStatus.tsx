import React, { useEffect, useState } from "react";
import initialBoard from "../../../mocks/initialBoard";
import "./KanbanCardStatus.css";
import getCardStatus from "../../../utils/getCardStatus";
import { assets } from "../../../assets/assets";
import type { BoardCard } from "../../../types/BoardCard";

interface KanbanCardStatusProps {
  card: BoardCard;
}

const KanbanCardStatus = ({ card }: KanbanCardStatusProps) => {
  const status = getCardStatus(card);
  const [currentStatus, setCurrentStatus] = useState(status);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  return (
    <div
      className="kanban-card-status"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      {currentStatus} <img src={assets.downArrow} alt="Dropdown" />
      <div
        className={`kanban-card-status-dropdown ${showDropdown ? "show" : ""}`}
      >
        {initialBoard.columns.map((column) => (
          <div
            key={column.id}
            className="kanban-card-status-option"
            onClick={() => {
              setCurrentStatus(column.title);
              setShowDropdown(false);
            }}
          >
            {column.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanCardStatus;
