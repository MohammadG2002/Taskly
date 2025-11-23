import React, { useState } from "react";
import "./KanbanTaskbar.css";
import KanbanCardStatus from "../KanbanCardStatus/KanbanCardStatus";
import KanbanCardActions from "../KanbanCardActions/KanbanCardActions";
import KanbanCardTabs from "../KanbanCardTabs/KanbanCardTabs.tsx";

interface KanbanTaskbarProps {
  show: boolean;
  onClose: () => void;
  selectedCard: Record<string, any>;
  selectedBag: any;
}

const KanbanTaskbar = ({
  show,
  onClose,
  selectedCard,
  selectedBag,
}: KanbanTaskbarProps) => {
  const [activeTab, setActiveTab] = useState("overview");
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
            <KanbanCardActions
              selectedCard={selectedCard}
              selectedBag={selectedBag}
              onClose={onClose}
            />
          </div>
          <KanbanCardTabs
            selectedCard={selectedCard}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
};

export default KanbanTaskbar;
