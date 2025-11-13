import React, { useState } from "react";
import { UncontrolledBoard } from "@caldwell619/react-kanban";
import "@caldwell619/react-kanban/dist/styles.css";
import "./KanbanBoard.css";
import initialBoard from "../../mocks/initialBoard";

const KanbanBoard = () => {
  const [selectedCard, setSelectedCard] = useState({});
  const [addingColumn, setAddingColumn] = useState(false);
  return (
    <>
      <UncontrolledBoard
        initialBoard={initialBoard}
        renderColumnHeader={(column) => (
          <div className="kanban-column-header">
            <span className="kanban-column-counter">{column.cards.length}</span>
            <span>{column.title}</span>
          </div>
        )}
        allowAddColumn={true}
        allowRenameColumn={true}
        renderColumnAdder={({ addColumn }) =>
          addingColumn ? (
            <input
              type="text"
              className="kanban-new-column-input"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addColumn({
                    id: Date.now(),
                    title: e.currentTarget.value,
                    cards: [],
                  });
                  setAddingColumn(false);
                }
                if (e.key === "Escape") {
                  setAddingColumn(false);
                }
              }}
            />
          ) : (
            <button
              className="kanban-add-column-button"
              onClick={() => {
                setAddingColumn(true);
                setTimeout(() => {
                  const input = document.querySelector(
                    ".kanban-new-column-input"
                  ) as HTMLInputElement;
                  if (input) {
                    input.focus();
                  }
                }, 0);
              }}
            >
              + Add Column
            </button>
          )
        }
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
    </>
  );
};

export default KanbanBoard;
