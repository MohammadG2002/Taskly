import React, { useState } from "react";
import "./KanbanTaskbar.css";
import KanbanCardStatus from "../KanbanCardStatus/KanbanCardStatus";
import { assets } from "../../../assets/assets";

interface KanbanTaskbarProps {
  show: boolean;
  onClose: () => void;
  selectedCard: Record<string, any>;
}

const KanbanTaskbar = ({ show, onClose, selectedCard }: KanbanTaskbarProps) => {
  const [liked, setLiked] = useState(false);
  return (
    <div
      className={`kanban-taskbar-backdrop ${show ? "open" : ""}`}
      onClick={onClose}
    >
      <div
        className={`kanban-taskbar ${show ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="kanban-taskbar-content">
          <div className="kanban-taskbar-header">
            <KanbanCardStatus card={selectedCard} />
            <div className="action-buttons">
              <button
                className={`like-button ${liked ? "liked" : ""}`}
                onClick={() => setLiked(!liked)}
              >
                <img src={`${assets[liked ? "liked" : "like"]}`} alt="Like" />
              </button>
              <button
                className="delete-card-button"
                onClick={() => selectedCard.delete}
              >
                <img src={assets.trash} alt="Delete" />
              </button>
              <button className="more-options-button">
                <img src={assets.threeDots} alt="More Options" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanTaskbar;
