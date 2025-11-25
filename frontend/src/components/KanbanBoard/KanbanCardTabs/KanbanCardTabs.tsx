import React from "react";
import kanbanCardTabs from "./kanbanCardTabs";
import "./KanbanCardTabs.css";
import type { BoardCard } from "../../../types/BoardCard";

interface KanbanCardTabsProps {
  selectedCard: BoardCard;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

interface Tab {
  id: string;
  label: string;
}

const KanbanCardTabs = ({
  selectedCard,
  activeTab,
  setActiveTab,
}: KanbanCardTabsProps) => {
  return (
    <div className="kanban-taskbar-tabs">
      {kanbanCardTabs.map((tab) => (
        <button
          key={tab.id}
          className={`kanban-taskbar-tab ${
            activeTab === tab.id ? "active" : ""
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}{" "}
          {tab.id === "comments" && `(${selectedCard.comments?.length})`}
        </button>
      ))}
    </div>
  );
};

export default KanbanCardTabs;
