import React from "react";
import "./KanbanCard.css";
import { assets } from "../../../assets/assets";

type AssetKey = keyof typeof assets;

interface KanbanCardProps {
  card: {
    title: string;
    attachments?: string[];
    priority: string;
    comments?: string[];
    assignees?: string[];
  };
  setSelectedCard: (card: object) => void;
}

const KanbanCard = ({ card, setSelectedCard }: KanbanCardProps) => {
  return (
    <div className="react-kanban-card" onClick={() => setSelectedCard(card)}>
      {card.attachments && card.attachments[0] && (
        <img
          src={card.attachments[0]}
          alt={card.title}
          className="kanban-card-image"
        />
      )}

      <div className="kanban-card-priority-container">
        <img
          src={assets[card.priority as AssetKey]}
          alt={card.priority}
          className="kanban-card-priority"
        />
      </div>

      <h2 className="kanban-card-title">{card.title}</h2>
      <div className="kanban-card-other">
        {card.attachments && card.attachments.length > 0 && (
          <div className="kanban-card-attachments">
            <img src={assets.attachment} alt="Attachments" />
            <span>{card.attachments.length}</span>
          </div>
        )}
        {card.comments && card.comments.length > 0 && (
          <div className="kanban-card-comments">
            <img src={assets.comment} alt="Comments" />
            <span>{card.comments.length}</span>
          </div>
        )}
        {card.assignees && card.assignees.length > 0 && (
          <div className="kanban-card-assignees">
            {card.assignees.slice(0, 3).map((assignee, index) => (
              <img key={index} src={assignee} />
            ))}
            {card.assignees.length > 3 && (
              <span className="kanban-card-more-assignees">
                +{card.assignees.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanCard;
