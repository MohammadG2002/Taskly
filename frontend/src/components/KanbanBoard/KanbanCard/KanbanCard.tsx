import React from "react";
import "./KanbanCard.css";

interface KanbanCardProps {
  card: {
    title: string;
    [key: string]: any;
  };
  setSelectedCard: (card: object) => void;
}

const KanbanCard = ({ card, setSelectedCard }: KanbanCardProps) => {
  return (
    <div className="react-kanban-card" onClick={() => setSelectedCard(card)}>
      <h2>{card.title}</h2>
    </div>
  );
};

export default KanbanCard;
