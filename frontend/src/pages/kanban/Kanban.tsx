import React, { useState } from "react";
import SwitchBox from "../../components/SwitchBox/SwitchBox";
import { UncontrolledBoard } from "@caldwell619/react-kanban";
import "@caldwell619/react-kanban/dist/styles.css";
import "./Kanban.css";
import initialBoard from "../../mocks/initialBoard";

const KanbanPage = () => {
  const [isFixedColumn, setIsFixedColumn] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  return (
    <>
      <header className="kanban-header">
        <h1 className="kanban-title">Kanban</h1>
        <div className="kanban-toggle">
          <span className="kanban-toggle-label">Fixed Column</span>
          <SwitchBox isOn={isFixedColumn} onToggle={setIsFixedColumn} />
        </div>
      </header>

      <main className="kanban-content">
        {isFixedColumn ? <p>Fixed Column is ON</p> : <p>Fixed Column is OFF</p>}
        <UncontrolledBoard
          initialBoard={initialBoard}
          renderCard={(card) => (
            <div
              className="react-kanban-card"
              onClick={() => setSelectedCard(card)}
              style={{ cursor: "pointer" }}
            >
              <h2>{card.title}</h2>
            </div>
          )}
        />
      </main>
    </>
  );
};

export default KanbanPage;
